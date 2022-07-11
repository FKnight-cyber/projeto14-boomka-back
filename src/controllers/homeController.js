import db from "../database/db.js";

export async function getMonthlyData(_,res){
    try {
        const myproducts = await db.collection('products').find({type: 'monthly'}).toArray();
        res.status(200).send(myproducts);
    }catch(error){
        res.status(500).send({message:`${error}`});
    }
}

export async function getDailyData(_,res){
    try {
        const myproducts = await db.collection('products').find({type: 'daily'}).toArray();
        res.status(200).send(myproducts);
    }catch(error){
        res.status(500).send({message:`${error}`});
    }
}

export async function getProductData(req,res){
    const { id } = req.params;
    if(!id) return res.status(422).send({message:"Id inválido"});
    try {
        const product = await db.collection('products').findOne({id: parseInt(id)});
        res.status(200).send(product);
    }catch(error){
        res.status(500).send({message:`${error}`});
    }
}

export async function insertData(req,res){
    const product = {...req.body, id:Date.now()}
    try {
        await db.collection('products').insertOne(product);
        res.status(200).send({message:"Produto cadastrado com sucesso!"});
    }catch(error){
        res.status(500).send({message:`${error}`});
    }
}

export async function getMyProduct (req, res) {
    const {user} = res.locals;
    
    const products = await db.collection('products').find({email: user.email}).toArray();
    
    res.send(products)
}