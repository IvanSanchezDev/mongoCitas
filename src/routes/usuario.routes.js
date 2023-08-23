import { Router } from 'express'
import { Usuarios } from '../controllers/Usuario.js'

export const appUsuario = Router()

appUsuario.get('/getUsuarios', Usuarios.getUsuarios)
appUsuario.get('/usuariosMedicoEspecifico/:nroMatriculaMedico', Usuarios.usuarioMedicoEspecifico)
