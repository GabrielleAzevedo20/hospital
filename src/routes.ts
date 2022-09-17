import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import MedicosController from './controllers/MedicosController';
import PacientesController from './controllers/PacientesController';
import AgendamentosController from './controllers/AgendamentosController';


const routes = Router();
const upload = multer(uploadConfig);

routes.get('/medicos', MedicosController.index);
routes.get('/medicos/:id', MedicosController.show);
routes.post('/medicos', MedicosController.create);
routes.delete('/medicos/:id', MedicosController.delete)


routes.get('/pacientes', PacientesController.index);
routes.get('/pacientes/:id', PacientesController.show);
routes.post('/pacientes', upload.single('images_pacientes'), PacientesController.create);
routes.delete('/pacientes/:id', PacientesController.delete)
routes.put('/pacientes/:id', upload.single('images_pacientes'), PacientesController.update)

routes.get('/agendamentos', AgendamentosController.index);
routes.get('/agendamentos/:id', AgendamentosController.show);
routes.post('/agendamentos', AgendamentosController.create);
routes.delete('/agendamentos/:id', AgendamentosController.delete);
routes.put('/agendamentos/:id', AgendamentosController.update);

export default routes;