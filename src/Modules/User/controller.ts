import {  getCustomRepository, Repository } from 'typeorm';
import { Controller } from '../../System/controllet';
import { HttpError } from '../../System/utils/errors';
import { Atleta } from '../Atleta/entity';
import { User } from './entity';
import { IAuth, ICreateUser } from './interfaces';
import UserRepository from './repository';
import { authenticate } from './utils/auth';

class UserController extends Controller<User> {
    protected getRepository(): Repository<any> {
        return getCustomRepository(UserRepository);
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

    async create(user: ICreateUser) {
        return this.getRepository().insertOne(user);
    }
}

const controller = new UserController();

export default controller;
