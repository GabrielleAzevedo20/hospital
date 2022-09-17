import { Request, Response } from 'express';
import uploadConfig from '../config/upload';
import path from 'path';
import { getRepository } from 'typeorm';
import Pacientes from '../models/Pacientes';


export default {
    async index(request: Request, response: Response) {
        const pacientesRepository = getRepository(Pacientes);

        const pacientes = await pacientesRepository.find();


        return response.json(pacientes);

    },



    async show(request: Request, response: Response) {
        const { id } = request.params;

        const pacientesRepository = getRepository(Pacientes);

        const pacientes = await pacientesRepository.findOneOrFail(id);


        return response.json(pacientes)

    },

    async create(request: Request, response: Response) {
        const {
            name_pacientes, 
            email,
            telefone,
        } = request.body;
    

    const pacientesRepository = getRepository(Pacientes);
    
    const requestImages = request.file as Express.Multer.File;
        const images_pacientes = requestImages.filename

        const pacientes = pacientesRepository.create({name_pacientes, 
            email,
            telefone,
            images_pacientes})


        path.join(uploadConfig.directory, pacientes.images_pacientes)

        await pacientesRepository.save(pacientes)

        return response.status(202).json(pacientes)

    },

    async delete(request: Request, response: Response) {
        const { id } = request.params; 
        
        const pacientesRepository = getRepository(Pacientes);
        
        await pacientesRepository.delete(id); 
        
        return response.send()
    },

    async update(request: Request, response: Response){
        const { id } = request.params;

        const {name_pacientes, email, telefone} = request.body;

        const requestImages = request.file as Express.Multer.File;
        const images_pacientes = requestImages.filename;

    const pacientesRepository = getRepository(Pacientes);

    const pacientes = await pacientesRepository.findOne(id);

    if(!Pacientes) {
        throw new Error('Paciente não existe');
    }


    await pacientesRepository.update(id, {
            name_pacientes,
            email,
            telefone,
            images_pacientes,
    });
        return response.json(Pacientes);
    },

}