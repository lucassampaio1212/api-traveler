import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImagesCities1620146944571 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable( new Table({
        name: "images_cities",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "city_id",
            type: "uuid"
          },
          {
            name: "image_name",
            type: "varchar"
          },
          {
            name: "created_at",
            type: "timestamp with time zone",
            default: "now()"
          }
        ],
        foreignKeys:[
          {
            name: "FKImageCity",
            referencedTableName: "cities",
            referencedColumnNames: ["id"],
            columnNames: ["city_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("images_cities");
    }

}
