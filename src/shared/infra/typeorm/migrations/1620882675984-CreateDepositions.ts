import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDepositions1620882675984 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "depositions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "city_id",
            type: "uuid",
          },
          {
            name: "place_id",
            type: "uuid",
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
        ],
        foreignKeys: [
          {
            name: "FKCitiesDepositions",
            referencedTableName: "cities",
            referencedColumnNames: ["id"],
            columnNames: ["city_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          },
          {
            name: "FKPlacesDepositions",
            referencedTableName: "places",
            referencedColumnNames: ["id"],
            columnNames: ["place_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("depositions")
    }

}
