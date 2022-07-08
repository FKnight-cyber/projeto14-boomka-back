import {signUpSchema, signInSchema, adressSchema} from '../schemas/authSchema.js'

function signUpMiddleware(req, res, next) {
    const validation = signUpSchema.validate(req.body);
    if(validation.error) {
        return res.sendStatus(422)
    }
    next();
}
function signInMiddleware(req, res, next) {
    const validation = signInSchema.validate(req.body);
    if(validation.error) {
        return res.sendStatus(422)
    }
    next();
}
function adressMiddleware(req, res, next) {
    const validation = adressSchema.validate(req.body);

    if(validation.error) {
        return res.sendStatus(422);
    }
    next();
}

export {signUpMiddleware, signInMiddleware, adressMiddleware}