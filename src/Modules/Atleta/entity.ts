import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { User } from '../User/entity';

@Entity('atletas')
export class Atleta {
    @OneToOne(() => User, user => user.id, {
        primary: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'id' })
    pessoa: User;
}
