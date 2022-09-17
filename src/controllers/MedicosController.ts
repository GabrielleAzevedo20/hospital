import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Medicos from '../models/Medicos';


export default {
    async index(request: Request, response: Response) {
        const medicosRepository = getRepository(Medicos);

        const medicos = await medicosRepository.find();


        return response.json(medicos);

    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const medicosRepository = getRepository(Medicos);

        const medicos = await medicosRepository.findOneOrFail(id);


        return response.json(medicos)

    },

    async create(request: Request, response: Response) {
        const {
            name_medico,
            especialidade,
        } = request.body;
    
        const medicosRepository = getRepository(Medicos);

        const data = medicosRepository.create({
            name_medico,
            especialidade,
        })

        
        const medicos = medicosRepository.create(data);

    
        await medicosRepository.save(medicos)
    
    
        return response.status(201).json(medicos)
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params; 
        
        const medicosRepository = getRepository(Medicos);
        
        await medicosRepository.delete(id); 
        
        return response.send()
    },

};