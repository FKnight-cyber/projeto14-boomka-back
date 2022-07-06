import joi from 'joi';

export default async function productSchema(req,res,next){
    const { type, preço, title, image } = req.body;

    const productSchema = joi.object(
        {
            type:joi.string().valid('daily','weekly','monthly').trim().required(),
            preço:joi.number().min(0).required(),
            title:joi.string().min(10).required(),
            image:joi.any().required()
        }
    )
    
    const { error } = productSchema.validate(req.body,{abortEarly:false});

    if(error) return res.status(422).send(error.details.map(detail => detail.message));

    res.locals.product = {
        type,
        preço,
        title,
        image
    }

    next();
}
