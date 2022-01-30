import {MigrationInterface, QueryRunner} from "typeorm";

export class initializeTables1643584313068 implements MigrationInterface {
    name = 'initializeTables1643584313068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "atletas" ("id" uuid NOT NULL, CONSTRAINT "REL_209e4ca399219bce544fac44de" UNIQUE ("id"), CONSTRAINT "PK_209e4ca399219bce544fac44dec" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "nutricionistas" ("credential" character varying NOT NULL, "credentialType" character varying NOT NULL, "type" character varying NOT NULL, "codigoPessoa" uuid NOT NULL, "id" uuid NOT NULL, CONSTRAINT "REL_5d44cea0d737a5bc24b2f73337" UNIQUE ("id"), CONSTRAINT "PK_63653609390fbfdb1e91ff131c6" PRIMARY KEY ("codigoPessoa", "id"))`);
        await queryRunner.query(`CREATE TABLE "personais" ("credential" character varying NOT NULL, "credentialType" character varying NOT NULL, "type" character varying NOT NULL, "codigoPessoa" uuid NOT NULL, "id" uuid NOT NULL, CONSTRAINT "REL_f6594ef6767ff8a3dba885edfe" UNIQUE ("id"), CONSTRAINT "PK_f9f768ebb2fbc85de328c5cc44b" PRIMARY KEY ("codigoPessoa", "id"))`);
        await queryRunner.query(`ALTER TABLE "atletas" ADD CONSTRAINT "FK_209e4ca399219bce544fac44dec" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "nutricionistas" ADD CONSTRAINT "FK_5d44cea0d737a5bc24b2f733371" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "personais" ADD CONSTRAINT "FK_f6594ef6767ff8a3dba885edfe5" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "personais" DROP CONSTRAINT "FK_f6594ef6767ff8a3dba885edfe5"`);
        await queryRunner.query(`ALTER TABLE "nutricionistas" DROP CONSTRAINT "FK_5d44cea0d737a5bc24b2f733371"`);
        await queryRunner.query(`ALTER TABLE "atletas" DROP CONSTRAINT "FK_209e4ca399219bce544fac44dec"`);
        await queryRunner.query(`DROP TABLE "personais"`);
        await queryRunner.query(`DROP TABLE "nutricionistas"`);
        await queryRunner.query(`DROP TABLE "atletas"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
