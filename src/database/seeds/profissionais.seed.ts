import { Profissional } from '../../Modules/Profissional/entity';
import {
    CREDENTIAL_TYPE,
    PROFISSIONAL_TYPE,
} from '../../Modules/Profissional/enums';
import { User } from '../../Modules/User/entity';

export const personalSeed = Object.assign(new User(), {
    name: 'Personal',
    email: 'personal@gmail.com',
    password: 'senhaDeTeste',
    profissionalProfile: Object.assign(new Profissional(), {
        credential: '828282',
        credentialType: CREDENTIAL_TYPE.personal,
        type: PROFISSIONAL_TYPE.personal,
    }),
});

export const nutricionistaSeed = Object.assign(new User(), {
    name: 'Nutri',
    email: 'nutri@gmail.com',
    password: 'senhaDeTeste',
    profissionalProfile: Object.assign(new Profissional(), {
        credential: '828282',
        credentialType: CREDENTIAL_TYPE.nutricionista,
        type: PROFISSIONAL_TYPE.nutricionista,
    }),
});
