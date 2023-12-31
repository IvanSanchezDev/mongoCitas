import { Medicos } from '../controllers/Medico.js'
import { Router } from 'express'
import passportHelper from '../helpers/passportHelper.js'
import routesVersioning from 'express-routes-versioning'
import { limitUsuario } from '../middlewares/limit.js'


const version = routesVersioning()

export const appMedico = Router()
appMedico.use(limitUsuario(), passportHelper.authenticate('bearer', { session: false }))

appMedico.get('/getMedicos/:especialidad', version({ '1.0.0': Medicos.getMedicoEspecializado }))
appMedico.get('/medicosAndConsultorios', version({ '1.0.0': Medicos.medicosAndConsultorios }))
