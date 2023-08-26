import passportHelper from '../helpers/passportHelper.js'
import Routes from 'express'
import { Citas } from '../controllers/Citas.js'
import routesVersioning from 'express-routes-versioning'

export const appCitas = Routes()

const version = routesVersioning()

// Bearer
appCitas.use(passportHelper.authenticate('bearer', { session: false }))

appCitas.get('/getCitas', version({ '3.5.0': Citas.getCitas, '1.0.0': Citas.citaGenero }))// APROBADA
appCitas.get('/proximaCita', Citas.proximaCita)// APROBADA
appCitas.get('/citasFechaEspecifica', Citas.citaFechaEspecifica)// APROBADA
appCitas.get('/citasFechaMedicoEspecifico/:nroMatricula', Citas.citasFechaMedicoEspecifico)
appCitas.get('/citasPorGenero/:genero', Citas.citaGenero)// APROBADA - AGREGAR GRUOP
appCitas.get('/citasRechazadas', Citas.citasRechazadas)// APROBADA
