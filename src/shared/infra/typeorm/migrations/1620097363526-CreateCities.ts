import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCities1620097363526 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "cities",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "description",
            type: "varchar"
          },
          {
            name: "created_at",
            type: "timestamp with time zone",
            default: "now()"
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("cities")
    }

}
