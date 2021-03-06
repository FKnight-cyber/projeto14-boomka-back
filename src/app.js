import express, {json} from 'express';
import router from './routes/index.js'
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()

const app = express();
app.use(json());
app.use(cors())
app.use(router)

app.listen(process.env.PORT);
