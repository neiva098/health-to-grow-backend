import { getRepository, Repository } from 'typeorm';
import { Controller } from '../../System/controllet';
import { HttpError } from '../../System/utils/errors';
import { User } from './entity';
import { IAuth } from './interfaces';
import { authenticate } from './utils/auth';

class UserController extends Controller<User> {
    protected getRepository(): Repository<User> {
        return getRepository(User);
    }

    async findByEmail(email: string) {
        const result = await this.getRepository().findOne({ email });

        return result;
    }

    async auth(body: IAuth) {
        const user = await this.findByEmail(body.email);

        if (!user) throw new HttpError(404, 'User not found');

        return authenticate(user, body.password);
    }
}

const controller = new UserController();

export default controller;
