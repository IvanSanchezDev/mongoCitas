import passportHelper from '../helpers/passportHelper.js'
import Routes from 'express'
import { Citas } from '../controllers/Citas.js'
import routesVersioning from 'express-routes-versioning'
import { limitUsuario } from '../middlewares/limit.js'

export const appCitas = Routes()

const version = routesVersioning()

// Bearer
appCitas.use(limitUsuario(),passportHelper.authenticate('bearer', { session: false }))

appCitas.get('/getCitas', version({ '1.0.0': Citas.getCitas }))// APROBADA
appCitas.get('/proximaCita', version({ '1.0.0': Citas.proximaCita }))// APROBADA
appCitas.get('/citasFechaEspecifica', version({ '1.0.0': Citas.citaFechaEspecifica }))// APROBADA
appCitas.get('/citasFechaMedicoEspecifico/:nroMatricula', version({ '1.0.0': Citas.citasFechaMedicoEspecifico }))
appCitas.get('/citasPorGenero/:genero', version({ '1.0.0': Citas.citaGenero }))// APROBADA - AGREGAR GRUOP
appCitas.get('/citasRechazadas', version({ '1.0.0': Citas.citasRechazadas }))// APROBADA
