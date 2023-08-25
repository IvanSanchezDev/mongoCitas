import Routes from 'express'
import routesVersioning from 'express-routes-versioning'
import { Login } from '../controllers/Login.js'
import { crearToken } from '../helpers/jwt.js'

export const appLogin = Routes()
const version = routesVersioning()

appLogin.use(crearToken)

// Headers 'Accept-Version: 1.0.0'
appLogin.post('/', version({
  '1.0.0': Login.loginV1,
  '1.1.0': Login.loginV2
}))
