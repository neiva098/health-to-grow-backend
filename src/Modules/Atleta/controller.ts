import { getRepository, Repository } from 'typeorm';
import { Controller } from '../../System/controllet';
import { Atleta } from './entity';

class AtletaController extends Controller<Atleta> {
    protected getRepository(): Repository<Atleta> {
        return getRepository(Atleta);
    }
}

const controller = new AtletaController();

export default controller;
