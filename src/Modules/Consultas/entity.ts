import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Atleta } from '../Atleta/entity';
import { Profissional } from '../Profissional/entity';

@Entity('consultas')
export class Consulta {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'date', nullable: false })
    dateTime: string;

    @ManyToOne(() => Profissional, specialist => specialist.consultas, {
        nullable: false,
        eager: true,
    })
    @JoinColumn({ name: 'codigoEspecialista' })
    specialist: Profissional;

    @Column({ nullable: false })
    codigoEspecialista: string;

    @ManyToOne(() => Atleta, atleta => atleta.consultas, {
        nullable: false,
        eager: true,
    })
    @JoinColumn({ name: 'codigoAtleta' })
    atleta: Atleta;

    @Column({ nullable: false })
    codigoAtleta: string;
}
