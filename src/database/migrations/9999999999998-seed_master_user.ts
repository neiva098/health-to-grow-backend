import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { User } from '../../Modules/User/entity';
import masterUser from '../seeds/users.seed';

export class seedMasterUser9999999999998 implements MigrationInterface {
    private createdUser: User;

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.startTransaction();
        this.createdUser = await getRepository(User).save(masterUser);
        await queryRunner.commitTransaction();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await getRepository(User).delete({ id: this.createdUser.id });
    }
}
