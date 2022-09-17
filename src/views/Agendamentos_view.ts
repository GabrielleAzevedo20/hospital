import Agendamentos from '../models/Agendamentos';
import Pacientes from '../models/Pacientes';
import Medicos from '../models/Medicos';

export default {
    render(agendamentos: Agendamentos | undefined,
            medicos: Medicos | undefined, 
            pacientes: Pacientes | undefined,) {
        return {
            id: agendamentos?.id,
            data_consulta: agendamentos?.data_consulta,
            hora_consulta: agendamentos?.hora_consulta,
            name_medico: medicos?.name_medico,
            especialidade: medicos?.especialidade,
            name_pacientes: pacientes?.name_pacientes,
            telefone: pacientes?.telefone,
            images_pacientes: `http://localhost:3333/uploads/${pacientes?.images_pacientes}`
        };
        return agendamentos;
    }
};