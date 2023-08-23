import { connect, closeConnection } from '../database/connection.js'

export class Cita {
  static async getCitas () {
    try {
      const db = await connect()
      const citas = db.collection('cita')
      const result = await citas.find().toArray()
      return result
    } catch (error) {
      console.error('Error al traer las citas')
      console.error(error.message)
    } finally {
      await closeConnection()
    }
  }

  static async proximaCita ({ id }) {
    try {
      const db = await connect()
      const citas = db.collection('cita')
      const result = citas.find({
        cit_datosUsuario: id,
        cit_fecha: { $gt: new Date() }
      }).sort({ cit_fecha: 1 }).limit(1).toArray()

      return result
    } catch (error) {
      console.error('Error al traer las cita')
      console.error(error.message)
    }
  }

  static async citaFechaEspecifico ({ fecha }) {
    try {
      const db = await connect()
      const citas = db.collection('cita')
      const result = await citas.find({
        cit_fecha: new Date(fecha)
      }).toArray()
      return result
    } catch (error) {
      console.error('Error al traer las citas en la fecha especificada')
      console.error(error.message)
    }
  }

  static async citaFechaMedicoEspecifico ({ fecha, nroMatriculaProfesional }) {
    console.log(fecha)
    console.log(nroMatriculaProfesional)
    try {
      const db = await connect()
      const citas = db.collection('cita')
      const result = citas.aggregate([
        {
          $match: {
            cit_fecha: new Date(fecha),
            cit_medico: nroMatriculaProfesional
          }
        },
        {
          $count: 'cantidad'
        }
      ])

      return result
    } catch (error) {
      console.error('Error al traer las citas en la fecha especificada y con el medico especifico')
      console.error(error.message)
    }
  }

  static async citaGenero ({ genero }) {
    console.log(genero)
    try {
      const db = await connect()
      const citas = db.collection('cita')
      const result = citas.aggregate([
        {
          $lookup: {
            from: 'usuario',
            localField: 'cit_datosUsuario',
            foreignField: 'usu_id',
            as: 'usuario'
          }
        },
        {
          $unwind: '$usuario'
        },
        {
          $lookup: {
            from: 'genero',
            localField: 'usuario.usu_genero',
            foreignField: 'gen_id',
            as: 'genero'
          }
        },
        {
          $match: {
            'genero.gen_abreviatura': genero
          }
        },
        {
          $project: {
            'usuario.usu_id': 0,
            'usuario.usu_genero': 0,
            'genero.gen_id': 0
          }
        }
      ]).toArray()

      return result
    } catch (error) {
      console.error('Error al terrorraer las citas de un genero en especifico')
      console.error(error.message)
    }
  }

  static async citasRechazadas () {
    try {
      const db = await connect()
      const citas = db.collection('cita')
      const result = await citas.aggregate([
        {
          $lookup: {
            from: 'usuario',
            localField: 'cit_datosUsuario',
            foreignField: 'usu_id',
            as: 'usuario'
          }
        },
        {
          $lookup: {
            from: 'medico',
            localField: 'cit_medico',
            foreignField: 'med_nroMatriculaProfesional',
            as: 'medico'
          }
        },
        {
          $lookup: {
            from: 'estado_cita',
            localField: 'cit_estadoCita',
            foreignField: 'estcita_id',
            as: 'estadoCita'
          }
        },
        {
          $match: {
            'estadoCita.estcita_nombre': 'Rechazada'
          }
        },
        {
          $project: {
            'usuario.usu_nombre': 1,
            'medico.med_nombreCompleto': 1,
            cit_fecha: '$cit_fecha'
          }
        }
      ]).toArray()
      return result
    } catch (error) {
      console.error('Error al traer las citas rechazadas')
      console.error(error.message)
    } finally {
      await closeConnection()
    }
  }
}
