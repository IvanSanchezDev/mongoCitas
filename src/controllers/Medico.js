import { Medico } from '../models/Medico.js'

export class Medicos {
  static async getMedicoEspecializado (req, res) {
    try {
      const especialidad = req.params.especialidad
      const medicos = await Medico.getMedicoEspecializado({ especialidad })
      res.status(200).json(medicos)
    } catch (error) {
      console.log('error en el controlador: ' + error.message)
      res.status(500).json({ error: 'Error al traer los datos' })
    }
  }

  static async medicosAndConsultorios (req, res) {
    try {
      const medicosConsultorios = await Medico.getMedicoConsultorios()
      res.status(200).json(medicosConsultorios)
    } catch (error) {
      console.log('error en el controlador:' + error.message)
      res.status(500).json({ error: 'Error al traer los datos' })
    }
  }
}
