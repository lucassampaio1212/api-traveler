import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUsers1619971161229 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "users",
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
            name: "email",
            type: "varchar"
          },
          {
            name: "password",
            type: "varchar"
          },
          {
            name: "isAdmin",
            type: "boolean",
            default: false,
          },
          {
            name: "created_at",
            type: "timestamp with time zone",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp with time zone",
            default: "now()"
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users");
    }

}
