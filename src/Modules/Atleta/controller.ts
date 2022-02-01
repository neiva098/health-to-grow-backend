import { getRepository, Repository } from 'typeorm';
import { Controller } from '../../System/controllet';
import { Atleta } from './entity';
import { ICreateAtleta } from './interfaces';

class AtletaController extends Controller<Atleta> {
    protected getRepository(): Repository<Atleta> {
        return getRepository(Atleta);
    }

    async create(atleta: ICreateAtleta) {
        return;
    }
}

const controller = new AtletaController();

export default controller;
