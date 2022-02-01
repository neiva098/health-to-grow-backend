import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTables1643686501084 implements MigrationInterface {
    name = 'createTables1643686501084';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "profissionais" ("credential" character varying NOT NULL, "credentialType" character varying NOT NULL, "type" character varying NOT NULL, "codigoPessoa" uuid NOT NULL, CONSTRAINT "REL_fe74d6f3a44769b59a2ef4284f" UNIQUE ("codigoPessoa"), CONSTRAINT "PK_fe74d6f3a44769b59a2ef4284f2" PRIMARY KEY ("codigoPessoa"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "consultas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dateTime" date NOT NULL, "codigoEspecialista" uuid NOT NULL, "codigoAtleta" uuid NOT NULL, CONSTRAINT "PK_889a9011f1854a60a6aae1c6d80" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "atletas" ("codigoPessoa" uuid NOT NULL, CONSTRAINT "REL_17d0f000a6246ecc8378bd5e30" UNIQUE ("codigoPessoa"), CONSTRAINT "PK_17d0f000a6246ecc8378bd5e30f" PRIMARY KEY ("codigoPessoa"))`,
        );
        await queryRunner.query(
            `ALTER TABLE "profissionais" ADD CONSTRAINT "FK_fe74d6f3a44769b59a2ef4284f2" FOREIGN KEY ("codigoPessoa") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "consultas" ADD CONSTRAINT "FK_87a28d84531d70709cb835e6c59" FOREIGN KEY ("codigoEspecialista") REFERENCES "profissionais"("codigoPessoa") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "consultas" ADD CONSTRAINT "FK_20f5453bfe75663a96c88f030f7" FOREIGN KEY ("codigoAtleta") REFERENCES "atletas"("codigoPessoa") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "atletas" ADD CONSTRAINT "FK_17d0f000a6246ecc8378bd5e30f" FOREIGN KEY ("codigoPessoa") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
        );
        await queryRunner.commitTransaction();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "atletas" DROP CONSTRAINT "FK_17d0f000a6246ecc8378bd5e30f"`,
        );
        await queryRunner.query(
            `ALTER TABLE "consultas" DROP CONSTRAINT "FK_20f5453bfe75663a96c88f030f7"`,
        );
        await queryRunner.query(
            `ALTER TABLE "consultas" DROP CONSTRAINT "FK_87a28d84531d70709cb835e6c59"`,
        );
        await queryRunner.query(
            `ALTER TABLE "profissionais" DROP CONSTRAINT "FK_fe74d6f3a44769b59a2ef4284f2"`,
        );
        await queryRunner.query(`DROP TABLE "atletas"`);
        await queryRunner.query(`DROP TABLE "consultas"`);
        await queryRunner.query(`DROP TABLE "profissionais"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
