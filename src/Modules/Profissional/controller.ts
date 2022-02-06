import { getRepository, Repository } from 'typeorm';
import { Controller } from '../../System/controllet';
import { Profissional } from './entity';
import { PROFISSIONAL_TYPE } from './enums';

class ProfissionalController extends Controller<Profissional> {
    protected getRepository(): Repository<Profissional> {
        return getRepository(Profissional);
    }

    public async find(query: {type: PROFISSIONAL_TYPE}) {
        return await this.getRepository().find({
            where: query,
            relations: ['pessoa']
        })
    } 
}

const controller = new ProfissionalController();

export default controller;
