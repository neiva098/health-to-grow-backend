import { getRepository, Repository } from 'typeorm';
import { Controller } from '../../System/controllet';
import { Consulta } from './entity';
import { ICreateConsulta } from './interfaces';
import { getAvaliable } from './utils';

class ConsultaController extends Controller<Consulta> {
    protected getRepository(): Repository<Consulta> {
        return getRepository(Consulta);
    }

    public async getAvaliable(codigoEspecialista: string): Promise<{ data: string; horarios: string[] }[]> {
        const consultas = await this.getRepository().find({
            where: {
                codigoEspecialista,
            }
        });

        return getAvaliable(consultas);
    }

    public async createMany(consultas: ICreateConsulta[]) {
        return await this.getRepository().save(consultas)
    }
}

const controller = new ConsultaController();

export default controller;
