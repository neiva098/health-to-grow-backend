import { IAtletaProfile } from "../Atleta/interfaces";

export interface IAuth {
    email: string;
    password: string;
}

export interface IUser {
    id: string;
    email: string;
    name: string;
    password: string;

    atletaProfile?: IAtletaProfile;
}

export interface ICreateUser extends Omit<IUser, 'id'> {}
