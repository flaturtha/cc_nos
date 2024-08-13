import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddCustomFieldsToProduct1623445678234 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("product", new TableColumn({
      name: "series",
      type: "varchar",
      isNullable: true,
    }));

    await queryRunner.addColumn("product", new TableColumn({
      name: "collections",
      type: "text[]", // Correct type for PostgreSQL arrays
      isNullable: true,
    }));
    

    await queryRunner.addColumn("product", new TableColumn({
      name: "reviews",
      type: "jsonb",
      isNullable: true,
    }));

    await queryRunner.addColumn("product", new TableColumn({
      name: "testimonials",
      type: "jsonb",
      isNullable: true,
    }));

    await queryRunner.addColumn("product", new TableColumn({
      name: "reviewCount",
      type: "integer",
      default: 0,
    }));

    await queryRunner.addColumn("product", new TableColumn({
      name: "averageRating",
      type: "float",
      default: 0.0,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("product", "series");
    await queryRunner.dropColumn("product", "collections");
    await queryRunner.dropColumn("product", "reviews");
    await queryRunner.dropColumn("product", "testimonials");
    await queryRunner.dropColumn("product", "reviewCount");
    await queryRunner.dropColumn("product", "averageRating");
  }
}
