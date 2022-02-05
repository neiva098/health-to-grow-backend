import { ICreateUser } from './interfaces';
import { DeepPartial, EntityRepository, Repository, SaveOptions } from 'typeorm';
import { Consulta } from '../Consultas/entity';
import { User } from './entity';
import { Atleta } from '../Atleta/entity';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
    async save<T extends DeepPartial<User>>(
        entity: T,
    ): Promise<T> {
        const relatedEntity = await this.createRelatedEntity(entity)

        return await super.save(relatedEntity);
    }

    protected async createRelatedEntity<T extends DeepPartial<User>>(entity: T) {
        const dbUser = await super.findOne({ email: entity.email });

        return {
            ...entity,
            id: dbUser?.id,
            atletaProfile: entity.atletaProfile
                ? Object.assign(new Atleta(), {
                      consultas: entity.atletaProfile?.consultas?.map(consulta =>
                          Object.assign(new Consulta(), consulta),
                      ),
                  })
                : undefined,
        };
    }
}
