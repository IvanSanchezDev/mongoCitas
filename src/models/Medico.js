import { connect, closeConnection } from '../database/connection.js'

export class Medico {
  static async getMedicoEspecializado ({ especialidad }) {
    try {
      const db = await connect()
      const medico = db.collection('medico')
      const result = await medico.aggregate([
        {
          $lookup: {
            from: 'especialidad',
            localField: 'med_especialidad',
            foreignField: 'esp_id',
            as: 'especialidad'
          }
        }, {
          $match: {
            'especialidad.esp_nombre': especialidad
          }
        }, {
          $project: {
            med_nombreCompleto: 1
          }
        }
      ]).toArray()

      return result
    } catch (error) {
      console.error('Error al traer los medicos con una especialidad especifica')
      console.error(error.message)
    } finally {
      await closeConnection()
    }
  }

  static async medicosAndConsultorios () {
    try {
      const db = await connect()
      const medico = db.collection('medico')
      const result = await medico.aggregate([
        {
          $lookup: {
            from: 'consultorio',
            localField: 'med_consultorio',
            foreignField: 'cons_codigo',
            as: 'consultorio'
          }
        },
        {
          $unwind: '$consultorio'
        },
        {
          $project: {
            med_nombreCompleto: 1,
            'consultorio.cons_nombre': 1
          }
        }
      ]).toArray()

      return result
    } catch (error) {
      console.error('Error al traer los medicos y sus consultorios')
      console.error(error.message)
    } finally {
      await closeConnection()
    }
  }
}
