import db from "../database/db.js";

export async function insertIntoCart(req,res){
    const { id } = req.body;
    const { token } = res.locals;

    if(!id) return res.status(422).send({message:"Id do produto inválido"});

    try {
        const session = await db.collection('sessions').findOne({token:token});
        const product = await db.collection('products').findOne({id:parseInt(id)});
        if(product.inventory===0) return res.status(422).send({message:"Estoque esgotado!"});
        const checkProduct = await db.collection('carrinho').findOne({...product, userId:session.userId});
        if(checkProduct) return res.status(422).send({message:"Esse produto já está no carrinho!"});
        await db.collection('carrinho').insertOne({...product, userId:session.userId});
        res.status(201).send({message:"Produto adicionado ao carrinho!"});
    }catch(error){
        res.status(500).send({message:`${error}`});
    }
}

export async function getCart(_,res){
    const { token } = res.locals;
    try {
        const session = await db.collection('sessions').findOne({token:token});
        const products = await db.collection('carrinho').find({userId:session.userId}).toArray();
        res.status(201).send(products)
    }catch(error){
        res.status(500).send({message:`${error}`});
    }
}

export async function deleteFromCart(req,res){
    const { id } = req.params;
    const { token } = res.locals;
    try {
        const session = await db.collection('sessions').findOne({token:token});
        await db.collection('carrinho').deleteOne({userId:session.userId,id:parseInt(id)})
        res.status(201).send({message:"Produto removido do carrinho"})
    }catch(error){
        res.status(500).send(error)
    }
}

export async function cleanCart(_,res){
    const { token } = res.locals;
    try {
        const session = await db.collection('sessions').findOne({token:token});
        await db.collection('carrinho').deleteMany({userId:session.userId})
        res.status(201).send({message:"carrinho limpo"})
    }catch(error){
        res.status(500).send(error)
    }
}