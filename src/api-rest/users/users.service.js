import { logger } from 'common/utils';
import { DuplicateException } from 'libs/http-exception/exceptions';
import { UserRepository } from './user.repository';

export class UsersService {
    /**
     * @type {UsersService}
     */
    static #instance;

    static getSingleton() {
        if (!UsersService.#instance) {
            UsersService.#instance = new UsersService(UserRepository.getSingleton());
        }
        logger.info(`[${UsersService.name}] is bundling`);
        return UsersService.#instance;
    }

    /**
     * @type {UserRepository}
     */
    #userRepository;

    constructor(userRepository) {
        this.#userRepository = userRepository;
    }

    async createOneAndReturn(data) {
        try {
            const [id] = await this.#userRepository.createOne(data);
            return id;
        } catch (error) {
            throw new DuplicateException(`username: ${data.username} has been existed`);
        }
    }

    async getByUsernameWithRoles(username) {
        const rows = await this.#userRepository.getOneBy('username', username)
            .innerJoin('users_roles', 'users_roles.user_id', '=', 'users.id')
            .innerJoin('roles', 'users_roles.role_id', '=', 'roles.id');
         
        if (!rows.length) {
            return null;
        }

        const user = rows[0];
        
        user.roles = [];

        rows.forEach(row => {
            user.roles.push({
                id: row.role_id,
                name: row.name
            });
        });

        delete user.role_id;
        delete user.user_id;
        delete user.name;

        return user;
    }
}