import { Router } from 'express'
import { Citas } from '../controllers/Citas.js'

export const appCitas = Router()

appCitas.get('/getCitas', Citas.getCitas)// APROBADA
appCitas.get('/proximaCita', Citas.proximaCita)// APROBADA
appCitas.get('/citasFechaEspecifica', Citas.citaFechaEspecifica)// APROBADA
appCitas.get('/citasFechaMedicoEspecifico/:nroMatricula', Citas.citasFechaMedicoEspecifico)
appCitas.get('/citasPorGenero/:genero', Citas.citaGenero)// APROBADA - AGREGAR GRUOP
appCitas.get('/citasRechazadas', Citas.citasRechazadas)// APROBADA
