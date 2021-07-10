import { logger } from 'common/utils';
import { OK } from 'http-status';
import { httpExceptionHandler } from 'libs/http-exception/handler/exception.handler';
import { AuthService } from './services/auth.service';
import { registerInput } from './dto/register-input';

export class AuthController {
    /**
     * @type {AuthController}
     */
    static #instance;

    static getSingleton() {
        if (!AuthController.#instance) {
            AuthController.#instance = new AuthController(AuthService.getSingleton());
            logger.info(`[${AuthController.name}] is bundling`);
        }
        return AuthController.#instance;
    }

    /**
     * @type {AuthService}
     */
    #authService;

    constructor(authService) {
        this.#authService = authService;
    }

    register = async (req, res) => {
        try {
            const data = await this.#authService.register(registerInput(req.body));
            return res.status(OK).json(data);
        } catch (error) {
            return httpExceptionHandler(error)(res);
        }
    }
}
