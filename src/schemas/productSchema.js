import joi from 'joi';

export default async function productSchema(req,res,next){
    const productSchema = joi.object(
        {
            manufacturer:joi.string().min(3).required(),
            department: joi.string().min(5).required(),
            type:joi.string().valid('daily','weekly','monthly').trim().required(),
            price:joi.number().min(0).required(),
            inventory:joi.number().min(0).required(),
            title:joi.string().min(10).required(),
            image:joi.any().required()
        }
    )
    
    const { error } = productSchema.validate(req.body,{abortEarly:false});

    if(error) return res.status(422).send(error.details.map(detail => detail.message));

    next();
}
