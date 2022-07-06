import {signUpSchema, signInSchema} from '../schemas/authSchema.js'

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

export {signUpMiddleware, signInMiddleware}