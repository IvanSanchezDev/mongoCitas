import { Usuario } from '../models/usuario.js'

export class Usuarios {
  static async getUsuarios (req, res) {
    try {
      const usuarios = await Usuario.getUsuarios()
      res.status(200).json(usuarios)
    } catch (error) {
      console.log('error en el controlador: ' + error.message)
      res.status(500).json({ error: 'Error al traer los datos' })
    }
  }

  static async usuarioMedicoEspecifico (req, res) {
    try {
      const nroMatricula = req.params.nroMatricula
      const usuario = await Usuario.usuarioMedicoEspecifico({ nroMatricula })
      res.status(200).json(usuario)
    } catch (error) {
      console.log('error en el controlador: ' + error.message)
      res.status(500).json({ error: 'Error al traer los datos' })
    }
  }
}
