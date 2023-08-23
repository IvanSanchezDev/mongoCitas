import { Router } from 'express'
import { Citas } from '../controllers/Citas.js'

export const appCitas = Router()

appCitas.get('/getCitas', Citas.getCitas)
appCitas.get('/proximaCita', Citas.proximaCita)
appCitas.get('/citasFechaEspecifica', Citas.citaFechaEspecifica)
appCitas.get('/citasFechaMedicoEspecifico/:nroMatricula', Citas.citasFechaMedicoEspecifico)
appCitas.get('/citasPorGenero', Citas.citaGenero)
appCitas.get('/citasRechazadas', Citas.citasRechazadas)
