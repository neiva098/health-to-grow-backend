import { Repository } from 'typeorm';

export abstract class Controller<Entity> {
    protected abstract getRepository(): Repository<Entity>;
}
