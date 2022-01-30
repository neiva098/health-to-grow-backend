import { Column } from 'typeorm';
import { User } from '../User/entity';

export class Profissional extends User {
    @Column({ nullable: false })
    credential: string;

    @Column({ nullable: false })
    credentialType: string;

    @Column({ nullable: false })
    type: string;
}
