import { getRepository, Repository } from 'typeorm';
import { Controller } from '../../System/controllet';
import { Consulta } from '../Consultas/entity';
import { User } from '../User/entity';
import { Atleta } from './entity';
import { ICreateAtleta } from './interfaces';

class AtletaController extends Controller<Atleta> {
    protected getRepository(): Repository<Atleta> {
        return getRepository(Atleta);
    }

    async create(atleta: ICreateAtleta) {
        const entity = {
            ...atleta,
            pessoa: Object.assign(new User(), atleta.pessoa),
            consultas: atleta.consultas.map(consulta =>
                Object.assign(new Consulta(), consulta),
            ),
        };

        return this.getRepository().save(entity);
    }
}

const controller = new AtletaController();

export default controller;
