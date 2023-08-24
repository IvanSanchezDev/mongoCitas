import { connect, closeConnection } from '../database/connection.js'

export class Usuario {
  static async getUsuarios () {
    try {
      const db = await connect()
      const usuario = db.collection('usuario')
      const result = usuario.find().sort({ usu_nombre: 1 }).toArray()
      return result
    } catch (error) {
      console.error(error.message)
      throw Error('Error al traer los usuarios:')
    }
  }

  static async usuarioMedicoEspecifico ({ nroMatricula }) {
    try {
      const db = await connect()
      const usuario = db.collection('usuario')
      const result = usuario.aggregate([
        {
          $lookup: {
            from: 'cita',
            localField: 'usu_id',
            foreignField: 'cit_datosUsuario',
            as: 'citas'
          }
        },
        {
          $unwind: '$citas'
        },
        {
          $lookup: {
            from: 'medico',
            localField: 'citas.cit_medico',
            foreignField: 'med_nroMatriculaProfesional',
            as: 'medico'
          }
        },
        {
          $match: {
            'medico.med_nroMatriculaProfesional': parseInt(nroMatricula)
          }
        },
        {
          $group: {
            _id: '$usu_nombre'
          }
        }
      ]).toArray()
      return result
    } catch (error) {
      console.error(error.message)
      throw Error('Error al encontrar todos los pacientes que tienen citas con un médico específico')
    } finally {
      await closeConnection()
    }
  }
}
