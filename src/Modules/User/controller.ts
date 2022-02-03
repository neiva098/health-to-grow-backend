import { getRepository, Repository } from 'typeorm';
import { Controller } from '../../System/controllet';
import { HttpError } from '../../System/utils/errors';
import { Atleta } from '../Atleta/entity';
import { Consulta } from '../Consultas/entity';
import { User } from './entity';
import { IAuth, ICreateUser } from './interfaces';
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

    async create(user: ICreateUser) {
        const entity = {
            ...user,
            atletaProfile: user.atletaProfile ?  Object.assign(new Atleta(), {
                consultas: user.atletaProfile?.consultas.map(consulta =>
                    Object.assign(new Consulta(), consulta),
                )
            }): undefined,
        };

        return this.getRepository().save(entity);
    }
}

const controller = new UserController();

export default controller;
