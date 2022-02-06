import { getRepository, Repository } from 'typeorm';
import { Controller } from '../../System/controllet';
import { Consulta } from './entity';
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
}

const controller = new ConsultaController();

export default controller;
