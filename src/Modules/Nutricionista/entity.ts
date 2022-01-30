import { Profissional } from '../Profissional/entity';
import { Entity } from 'typeorm';
import { CREDENTIAL_TYPE, PROFISSIONAL_TYPE } from '../Profissional/enums';

@Entity('nutricionistas')
export class Personal extends Profissional {
    credentialType = CREDENTIAL_TYPE.nutricionista;
    type = PROFISSIONAL_TYPE.nutricionista;
}
