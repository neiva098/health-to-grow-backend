import { Entity } from 'typeorm';
import { Profissional } from '../Profissional/entity';
import { CREDENTIAL_TYPE, PROFISSIONAL_TYPE } from '../Profissional/enums';

@Entity('personais')
export class Personal extends Profissional {
    credentialType = CREDENTIAL_TYPE.personal;
    type = PROFISSIONAL_TYPE.personal;
}
