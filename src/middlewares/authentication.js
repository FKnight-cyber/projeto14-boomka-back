export default async function(req,res,next){
  const { authorization } = req.headers;
  if(!authorization) return res.status(401).send({message:"O token de autenticação não foi enviado!"});
  const token = authorization.replace("Bearer","").trim();
  res.locals.token = token;
  next();
}

