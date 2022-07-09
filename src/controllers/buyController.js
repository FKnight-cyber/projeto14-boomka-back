import db from "../database/db.js";

export async function buy(req,res){
    const { token } = res.locals;
    const { type,value,cart } = req.body;

    try {
        const session = await db.collection('sessions').findOne({token:token});
        const user = await db.collection('users').findOne({_id:session.userId});
        const localizacao = await db.collection('adress').findOne({userId:session.userId});

        let pedido = {
            email: user.email,
            type,
            value: parseInt(value).toFixed(2),
            compras:cart,
            address:localizacao
        };

        if(type === 'pix'){
            pedido = {...pedido, pixkey:user.email}
        }
        
        await db.collection('pedidos').insertOne(pedido);
        for(let i = 0;i < cart.length;i++){
            await db.collection('products').updateOne({id:cart[i].id},{$inc:{inventory: -1}});
        }
        await db.collection('carrinho').deleteMany({userId:session.userId});
        res.status(201).send({message:"Compra finalizada!"})
    }catch(error){
        res.sendStatus(500);
    }
}