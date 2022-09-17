import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('medicos')
export default class Medicos {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name_medico: string;

    @Column()
    especialidade: string;
}