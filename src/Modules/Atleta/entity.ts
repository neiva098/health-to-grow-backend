import { Entity } from 'typeorm';
import { User } from '../User/entity';

@Entity('nutricionistas')
export class Atleta extends User {}
