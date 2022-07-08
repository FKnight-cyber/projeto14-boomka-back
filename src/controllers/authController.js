import db from '../database/db.js'
import bcrypt from 'bcrypt'
import {v4 as uuid} from 'uuid'

export async function signUp (req, res) {
    const {email, password, cpf} = req.body;

    const passwordHash = bcrypt.hashSync(password, 10);

    await db.collection('users').insertOne({email, cpf, password: passwordHash});
    res.sendStatus(201);
}

export async function signIn (req, res) {
    const {email, password} = req.body;

    const user = await db.collection('users').findOne({email});

    if(user && bcrypt.compareSync(password, user.password)) {
        const token = uuid();
        await db.collection('sessions').insertOne({
            userId: user._id,
            token
        });
        res.send(token).status(201)
    } else {
        res.sendStatus(401)
    }
}

export async function adress (req, res) {
    //const {cep, endereço, numero, bairro, cidade } = req.body;
    res.sendStatus(201)
}