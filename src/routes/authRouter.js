import { Router } from 'express';
import { signIn, signUp } from '../controllers/authController.js';
import authentication from '../middlewares/authentication.js';
import {signUpMiddleware, signInMiddleware} from '../middlewares/authMiddleware.js';

const authRouter = Router();

authRouter.post('/sign-up', signUpMiddleware, signUp);
authRouter.post('/sign-in', signInMiddleware, signIn);

export default authRouter;