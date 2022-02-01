import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Consulta } from '../Consultas/entity';
import { User } from '../User/entity';

@Entity('atletas')
export class Atleta {
    @OneToOne(() => User, user => user.id, {
        primary: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'codigoPessoa' })
    pessoa: User;

    @OneToMany(() => Consulta, consulta => consulta.atleta, {
        onDelete: 'CASCADE',
    })
    consultas: Consulta[];

    @Column('uuid', { nullable: false, primary: true })
    codigoPessoa: string;
}
