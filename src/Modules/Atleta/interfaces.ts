import { Consulta } from '../Consultas/entity';
import { User } from '../User/entity';

export interface IAtleta {
    email: string;
    name: string;
    password: string;

    id?: string;
}

export interface IAtletaRelationed extends IAtleta {
    pessoa: User;
    consultas: Consulta[];
}

export interface ICreateAtleta extends Omit<IAtletaRelationed, 'id'> {}
