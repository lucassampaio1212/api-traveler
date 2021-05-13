import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateImageDepositions1620940428188 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
          name: "images_depositions",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "deposition_id",
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
          foreignKeys: [
            {
              name: "FKImageDepositions",
              referencedTableName: "depositions",
              referencedColumnNames: ["id"],
              columnNames: ["deposition_id"],
              onDelete: "CASCADE",
              onUpdate: "CASCADE"
            }
          ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("images_depositions");
    }

}
