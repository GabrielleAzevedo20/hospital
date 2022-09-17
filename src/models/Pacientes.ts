import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Images_pacientes from './Images_pacientes';


@Entity('pacientes') 
export default class Pacientes {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name_pacientes: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @Column()
    images_pacientes: string;

}