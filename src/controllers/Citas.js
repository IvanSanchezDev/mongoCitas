import { Cita } from '../models/Cita.js'

export class Citas {
  static async getCitas (req, res) {
    try {
      const citas = await Cita.getCitas()
      res.status(200).json(citas)
    } catch (error) {
      console.log('error en el controlador: ' + error.message)
      res.status(500).json({ error: 'Error al traer los datos' })
    }
  }

  static async proximaCita (req, res) {
    try {
      const idUsuario = req.params.id
      const proximaCita = await Cita.proximaCita({ id: idUsuario })
      res.status(200).json(proximaCita)
    } catch (error) {
      console.log('error en el controlador: ' + error.message)
      res.status(500).json({ error: 'Error al traer los datos' })
    }
  }

  static async citaFechaEspecifica (req, res) {
    try {
      const fechaCita = req.query.fecha
      const citas = await Cita.citaFechaEspecifico({ fecha: fechaCita })
      res.status(200).json(citas)
    } catch (error) {
      console.log('error en el controlador: ' + error.message)
      res.status(500).json({ error: 'Error al traer los datos' })
    }
  }

  static async citasFechaMedicoEspecifico (req, res) {
    try {
      const nroMatricula = req.params.nroMatricula
      const fechaCita = req.query.fecha
      const citas = await Cita.citaFechaMedicoEspecifico({ fecha: fechaCita, nroMatriculaProfesional: nroMatricula })
      res.status(200).json(citas)
    } catch (error) {
      console.log('error en el controlador: ' + error.message)
      res.status(500).json({ error: 'Error al traer los datos' })
    }
  }

  static async citaGenero (req, res) {
    try {
      const abrGenero = req.params.genero
      const citas = await Cita.citaGenero({ genero: abrGenero })
      res.status(200).json(citas)
    } catch (error) {
      console.log('error en el controlador: ' + error.message)
      res.status(500).json({ error: 'Error al traer los datos' })
    }
  }

  static async citasRechazadas (req, res) {
    try {
      const citas = await Cita.citasRechazadas()
      res.status(200).json(citas)
    } catch (error) {
      console.log('error en el controlador:' + error.message)
      res.status(500).json({ error: 'Error al traer los datos' })
    }
  }
}
