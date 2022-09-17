import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAgendamentos1606683892504 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'agendamentos',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'data_consulta',
                    type: 'number',
                },
                {
                    name: 'hora_consulta',
                    type: 'number',
                },
                {
                    name: 'medico_id',
                    type: 'number',
                },
                {
                    name: 'pacientes_id',
                    type: 'number',
                },
            ],
            foreignKeys: [
                {
                    name: 'medico_id',
                    columnNames: ['medico_id'],
                    referencedTableName: 'medicos',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
                {
                    name: 'pacientes_id',
                    columnNames: ['pacientes_id'],
                    referencedTableName: 'pacientes',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('agendamentos')
    }

}
