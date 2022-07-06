import db from '../database/db.js'

export async function signUp (req, res) {
    await db.collection('users').insertOne({name:'emily'});
    res.send("deu bom")
}

export async function signIn (req, res) {
    
}