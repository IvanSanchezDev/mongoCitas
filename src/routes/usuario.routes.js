import { Router } from 'express'
import { Usuarios } from '../controllers/Usuario.js'
import passportHelper from '../helpers/passportHelper.js'
import routesVersioning from 'express-routes-versioning'

const version = routesVersioning()

export const appUsuario = Router()
appUsuario.use(passportHelper.authenticate('bearer', { session: false }))

appUsuario.get('/getUsuarios', version({ '1.0.0': Usuarios.getUsuarios }))
appUsuario.get('/usuariosMedicoEspecifico/:nroMatriculaMedico', version({ '1.0.0': Usuarios.usuarioMedicoEspecifico }))
