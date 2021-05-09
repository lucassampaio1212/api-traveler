import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImagesPlaces1620569316100 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "images_places",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "place_id",
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
          },
        ],
        foreignKeys:[
          {
            name: "FKImagePlaces",
            referencedTableName: "places",
            referencedColumnNames: ["id"],
            columnNames: ["place_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL"
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("images_places");
    }

}
