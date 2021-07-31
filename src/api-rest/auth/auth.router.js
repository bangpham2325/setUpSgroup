import express from 'express';
import { AuthController } from './auth.controller';
import { loginValidator } from './validator/login.validator';
import { registerValidator } from './validator/register.validator';
const router = express.Router();

router.post('/register', registerValidator, AuthController.getSingleton().register);
router.post('/login', loginValidator, AuthController.getSingleton().login);
export const authRouter = router;
