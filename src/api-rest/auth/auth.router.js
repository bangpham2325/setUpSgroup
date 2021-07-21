import express from 'express';
import { AuthController } from './auth.controller';
import { loginValidator } from './validator/login.validator';

const router = express.Router();

router.post('/register', loginValidator, AuthController.getSingleton().register);
router.post('/register', loginValidator, AuthController.getSingleton().login);
export const authRouter = router;
