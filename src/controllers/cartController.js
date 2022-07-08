import db from "../database/db.js";
export default async function insertIntoCart(req,res){
    const { inventory } = req.body;

    if(inventory === 0) return res.status(422).send({message:"Estoque esgotado!"});

    const product = {...req.body};
    try {
        await db.collection('carrinho').insertOne(product);
        res.status(200).send("Produto adicionado ao carrinho!");
    }catch(error){
        res.sendStatus(500);
    }
}