import { Medicos } from '../controllers/Medico.js'
import { Router } from 'express'

export const appMedico = Router()

appMedico.get('/getMedicos/:especialidad', Medicos.getMedicoEspecializado)
appMedico.get('/medicosAndConsultorios', Medicos.medicosAndConsultorios)
