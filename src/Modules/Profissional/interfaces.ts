import { User } from './../User/entity';
export interface IProfissional {
    credential: string,
    credentialType: string,
    type: string,
    codigoPessoa: string
}

export interface IRelationedProfissional extends IProfissional {
    pessoa: User
}