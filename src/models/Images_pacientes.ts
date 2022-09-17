import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Pacientes from './Pacientes';

@Entity('images_pacientes') 
export default class Images_pacientes {
    @PrimaryGeneratedColumn('increment')
    id: 'number'

    @Column()
    path: string;

    @Column()
    paciente_id: number;

    @ManyToOne(() => Pacientes, pacientes => pacientes.images_pacientes)
    @JoinColumn({ name: 'pacientes_id' })
    pacientes: Pacientes
}