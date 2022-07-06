import db from "../database/db.js";

export async function getData(_,res){
    try {
        const myproducts = await db.collection('products').find({type: 'monthly'}).toArray();
        res.status(200).send(myproducts);
    }catch(error){
        res.sendStatus(500);
    }
}

export async function insertData(req,res){
    const product = req.body
    try {
        await db.collection('products').insertOne(product);
        res.status(200).send("Produto cadastrado com sucesso!");
    }catch(error){
        res.sendStatus(500);
    }
}