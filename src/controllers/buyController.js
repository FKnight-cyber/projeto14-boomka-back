import db from "../database/db.js";

export async function buy(req,res){
    const { token } = res.locals;
    const { type,value,cart } = req.body;

    try {
        const session = await db.collection('sessions').findOne({token:token});
        const user = await db.collection('users').findOne({_id:session.userId});

        cart.forEach(product=>{
            await db.collection('products').updateOne({id:product.id},{$set:{inventory: product.inventory-1}})
        })

        let pedido = {};

        if(type === 'pix'){
            pedido = {
                email: user.email,
                type,
                pixkey:user.email,
                value,
                compras:cart
            }
        }
        
        await db.collection('pedidos').insertOne(pedido);
        res.status(201).send({message:"Compra finalizada!"})
    }catch(error){
        res.sendStatus(500);
    }
}