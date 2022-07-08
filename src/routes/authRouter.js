import { Router } from 'express';
import { signIn, signUp, sendAdress, getAdress } from '../controllers/authController.js';
import tokenMiddleware from '../middlewares/tokenMiddleware.js';
import {signUpMiddleware, signInMiddleware, adressMiddleware} from '../middlewares/authMiddleware.js';

const authRouter = Router();

authRouter.post('/sign-up', signUpMiddleware, signUp);
authRouter.post('/sign-in', signInMiddleware, signIn);
authRouter.post('/adress', tokenMiddleware, adressMiddleware, sendAdress);
authRouter.get('/adress', tokenMiddleware, getAdress);

export default authRouter;