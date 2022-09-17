import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Medicos from '../models/Medicos';
import Pacientes from '../models/Pacientes';
import Images_pacientes from '../models/Images_pacientes';
import agendamentos_View from '../views/Agendamentos_view';
import Agendamentos from '../models/Agendamentos';


export default {
    async index(request: Request, response: Response) {
        const agendamentosRepository = getRepository(Agendamentos)

        const agendamentos = await agendamentosRepository.find();

        return response.json(agendamentos)
    },

    async show(request: Request, response: Response) {
        const agendamentosRepository = getRepository(Agendamentos)

        const pacientesRepository = getRepository(Pacientes)

        const medicosRepository = getRepository(Medicos)

        const { id } = request.params;

        const agendamentos = await agendamentosRepository.findOneOrFail(id);

        const medicos = await medicosRepository.findOneOrFail(agendamentos?.medico_id);

        const pacientes = await pacientesRepository.findOneOrFail(agendamentos?.pacientes_id)

        return response.json(agendamentos_View.render(agendamentos, medicos, pacientes));
    },


    async create (request: Request, response: Response) {
        const {
            data_consulta,
            hora_consulta,
            medico_id,
            pacientes_id,
        } = request.body;

        const agendamentosRepository = getRepository(Agendamentos);

        const data = agendamentosRepository.create({
            data_consulta,
            hora_consulta,
            medico_id,
            pacientes_id,
        });

        const agendamentos = agendamentosRepository.create(data);

        await agendamentosRepository.save(agendamentos)


        return response.status(201).json(agendamentos)
    },

        async delete(request: Request, response: Response) {
            const { id } = request.params;

            const agendamentosRepository = getRepository(Agendamentos)

            await agendamentosRepository.delete(id);


            return response.send()
        },


        async update(request: Request, response: Response) {
            const { id } = request.params;

            const {data_consulta, hora_consulta, medico_id, pacientes_id } = request.body;

            const agendamentosRepository = getRepository(Agendamentos);

            const agendamentos = await agendamentosRepository.findOne(id);

            if(!Agendamentos) {
                throw new Error('Agendamento não existe');
            }


            await agendamentosRepository.update(id, {
                data_consulta,
                hora_consulta,
                medico_id,
                pacientes_id
            })

            return response.json(Agendamentos)

        }, 
}