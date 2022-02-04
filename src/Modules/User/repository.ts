import { ICreateUser } from './interfaces';
import { EntityRepository, Repository } from 'typeorm';
import { Consulta } from '../Consultas/entity';
import { User } from './entity';
import { Atleta } from '../Atleta/entity';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
    async insertOne(user: ICreateUser): Promise<User> {
        const dbUser = await super.findOne({email: user.email})

        const entity: User = {
            ...user,
            id: dbUser?.id,
            atletaProfile: user.atletaProfile ?  Object.assign(new Atleta(), {
                consultas: user.atletaProfile?.consultas.map(consulta =>
                    Object.assign(new Consulta(), consulta),
                )
            }): undefined,
        } as any;

        return await super.save(entity);
    }
}