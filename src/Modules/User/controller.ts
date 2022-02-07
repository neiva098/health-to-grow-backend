import {  getCustomRepository, Repository } from 'typeorm';
import { Controller } from '../../System/controllet';
import { HttpError } from '../../System/utils/errors';
import { User } from './entity';
import { IAuth, ICreateUser } from './interfaces';
import UserRepository from './repository';
import Consultas from '../Consultas/controller'
import { authenticate } from './utils/auth';

class UserController extends Controller<User> {
    protected getRepository(): UserRepository {
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
        const createdUser: any = await this.getRepository().save(user);
    
        if (createdUser.atletaProfile) Consultas.createMany(user.atletaProfile?.consultas.map(consulta => {
            return {
                ...consulta,
                codigoAtleta: createdUser.id
            } as any
        })!)

        return {
            ...createdUser,
            password: undefined
        }
    }
}

const controller = new UserController();

export default controller;
