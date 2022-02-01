import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { User } from '../../Modules/User/entity';
import * as entities from '../seeds/profissionais.seed';

export class seedProfissionais9999999999999 implements MigrationInterface {
    private createdPersonal: User;
    private createdNutri: User;

    public async up(queryRunner: QueryRunner): Promise<void> {
        this.createdPersonal = await getRepository(User).save(entities.personalSeed);
        this.createdNutri = await getRepository(User).save(
            entities.nutricionistaSeed,
        );

        await queryRunner.startTransaction();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await getRepository(User).delete({ id: this.createdPersonal.id });
        await getRepository(User).delete({ id: this.createdNutri.id });
    }
}
