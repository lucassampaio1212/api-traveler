import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAddresses1620250145610 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "addresses",
        columns:  [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "zip_code",
            type: "numeric",
          },
          {
            name: "street",
            type: "varchar"
          },

          {
            name: "neighborhood",
            type: "varchar"
          },
          {
            name: "number",
            type: "numeric",
            isNullable: true,
          },

        ],
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("addresses");
    }

}
