import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePlacesCities1620836218225 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "places_cities",
      columns: [
        {
          name: "city_id",
          type: "uuid"
        },
        {
          name: "place_id",
          type: "uuid"
        },
        {
          name: "created_at",
          type: "timestamp with time zone",
          default: "now()"
        }
      ],
      foreignKeys: [
        {
          name: "FKCitiesAddresses",
          referencedTableName: "cities",
          referencedColumnNames: ["id"],
          columnNames: ["city_id"],
          onDelete: "CASCADE",
          onUpdate: "CASCADE"
        },
        {
          name: "FKPlacesCities",
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
  await queryRunner.dropTable("places_cities");
}


}
