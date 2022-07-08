import joi from 'joi'

const signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    checkPassword: joi.any().valid(joi.ref('password')).required(),
    cpf: joi.string().required()
})

const signInSchema = joi.object({
    email: joi.string().email().required(),
    password:joi.string().required()
})

const adressSchema = joi.object({
    cep: joi.string().required(),
    endereço: joi.string().required(),
    numero: joi.number().required(),
    bairro: joi.string().required(),
    cidade: joi.string().required()
})

export {signUpSchema, signInSchema, adressSchema}
