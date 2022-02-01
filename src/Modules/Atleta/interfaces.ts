export interface IAtleta {
    email: string;
    name: string;
    password: string;

    id?: string;
}

export interface ICreateAtleta extends IAtleta {}
