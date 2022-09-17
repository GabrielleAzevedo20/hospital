import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class imagesPacientes1606681650285 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('pacientes', new TableColumn({
            name: 'images_pacientes',
            type: 'varchar',
            isNullable: true,
        }),
        );
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('pacientes', 'images_pacientes');
    }

}
