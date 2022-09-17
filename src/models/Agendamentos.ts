import { Entity, Column, ManyToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import Medicos from './Medicos';
import Pacientes from './Pacientes';


@Entity('agendamentos') 
export default class Agendamentos {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    data_consulta: number;

    @Column()
    hora_consulta: number;

    @Column()
    medico_id: number;

    @Column()
    pacientes_id: number

    @ManyToMany(() => Medicos, {
        cascade: ['insert', 'update']
    })
    
    @JoinColumn({ name: 'medico_id' })
    medicos: Medicos

    @ManyToMany(() => Pacientes, {
        cascade: ['insert', "update"]
    })
    @JoinColumn({ name: 'pacientes_id'})
    pacientes: Pacientes
}