import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Consulta } from '../Consultas/entity';
import { User } from '../User/entity';

@Entity('profissionais')
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
    @JoinColumn({ name: 'codigoPessoa' })
    pessoa: User;

    @OneToMany(() => Consulta, consulta => consulta.specialist, {
        onDelete: 'CASCADE',
    })
    consultas: Consulta[];

    @Column('uuid', { nullable: false, primary: true })
    codigoPessoa: string;
}
