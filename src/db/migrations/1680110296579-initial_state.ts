import { MigrationInterface, QueryRunner } from "typeorm";

export class initialState1680129493340 implements MigrationInterface {
    name = 'initialState1680129493340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "coaches" (
            "id" SERIAL PRIMARY KEY,
            "name" character varying NOT NULL,
            "date_of_birth" TIMESTAMP,
            "nationality" character varying
        )`);

        await queryRunner.query(`CREATE TABLE "teams" (
            "id" SERIAL PRIMARY KEY,
            "name" character varying NOT NULL,
            "tla" character varying NOT NULL,
            "short_name" character varying NOT NULL,
            "area_name" character varying NOT NULL,
            "address" character varying NOT NULL,
            "coach" integer,
            CONSTRAINT "fk_coach" FOREIGN KEY ("coach") REFERENCES "coaches"("id") ON DELETE CASCADE ON UPDATE CASCADE
        )`);

        await queryRunner.query(`CREATE TABLE "players" (
            "id" SERIAL PRIMARY KEY,
            "name" character varying NOT NULL,
            "position" character varying NOT NULL,
            "date_of_birth" TIMESTAMP NOT NULL,
            "nationality" character varying NOT NULL,
            "team" integer,
            CONSTRAINT "fk_team" FOREIGN KEY ("team") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        )`);

        await queryRunner.query(`CREATE TABLE "competitions" (
            "id" SERIAL PRIMARY KEY,
            "name" character varying NOT NULL,
            "code" character varying NOT NULL,
            "area_name" character varying NOT NULL
        )`);

        await queryRunner.query(`CREATE TABLE "competitions_teams" (
            "competitionsId" integer NOT NULL,
            "teamsId" integer NOT NULL,
            PRIMARY KEY ("competitionsId", "teamsId"),
            CONSTRAINT "fk_team" FOREIGN KEY ("teamsId") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
            CONSTRAINT "fk_competition" FOREIGN KEY ("competitionsId") REFERENCES "competitions"("id") ON DELETE CASCADE ON UPDATE CASCADE
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "competitions_teams"`);
        await queryRunner.query(`DROP TABLE "competitions"`);
        await queryRunner.query(`DROP TABLE "players"`);
        await queryRunner.query(`DROP TABLE "teams"`);
        await queryRunner.query(`DROP TABLE "coaches"`);
    }

}
