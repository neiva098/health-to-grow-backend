import { Column, JoinColumn, OneToOne } from 'typeorm';
import { User } from '../User/entity';

export class Profissional {
    @Column({ nullable: false })
    credential: string;

    @Column({ nullable: false })
    credentialType: string;

    @Column({ nullable: false })
    type: string;

    @OneToOne(() => User, user => user.id, {
        primary: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'id' })
    pessoa: User;

    @Column('uuid', { nullable: false, primary: true })
    codigoPessoa: string;
}
