import express, {json} from 'express';
import router from './routes/index.js'
import dotenv from 'dotenv';
dotenv.config()

const app = express();
app.use(json);
app.use(router)

app.listen(5000);
