import { MigrationInterface, QueryRunner } from 'typeorm';

export class initializeTables1643582096663 implements MigrationInterface {
    name = 'initializeTables1643582096663';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "nutricionistas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "credential" character varying NOT NULL, "credentialType" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "UQ_1909fd2ea6b7d8ed32bb381980d" UNIQUE ("email"), CONSTRAINT "PK_5d44cea0d737a5bc24b2f733371" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "personais" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "credential" character varying NOT NULL, "credentialType" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "UQ_5abd138f1d790a373147fe9e894" UNIQUE ("email"), CONSTRAINT "PK_f6594ef6767ff8a3dba885edfe5" PRIMARY KEY ("id"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "personais"`);
        await queryRunner.query(`DROP TABLE "nutricionistas"`);
    }
}
