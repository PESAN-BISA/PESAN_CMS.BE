import { MigrationInterface, QueryRunner } from 'typeorm';

export class BaseMigration1690032762345 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE users (id varchar(36), user_name varchar(255), password varchar(255), role ENUM('ADMIN', 'ASSESSEE', 'ASSESSOR'), current_semester tinyint(1), created_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), updated_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY(id));`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE users`);
  }
}
