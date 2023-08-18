use('db_citas_campus')
db.createCollection('tipo_documento', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'tipo_documento object validation',
      required: ['tipdoc_id', 'tipdoc_nombre', 'tipdoc_abreviatura'],
      properties: {
        tipdoc_id: {
          bsonType: 'int',
          description: 'ID del tipo de documento es requerido y debe ser de tipo integer'
        },
        tipdoc_nombre: {
          bsonType: 'string',
          description: 'nombre del tipo de documento debe ser obligatorio y de tipo string'
        },
        tipdoc_abreviatura: {
          bsonType: 'string',
          description: 'abreviatura del tipo de documento, si existe, debe ser de tipo string'
        }
      }
    }
  }
})

use('db_citas_campus')
db.createCollection('genero', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'genero object validation',
      required: ['gen_id', 'gen_nombre', 'gen_abreviatura'],
      properties: {
        gen_id: {
          bsonType: 'int',
          description: 'ID del género es requerido y debe ser de tipo integer'
        },
        gen_nombre: {
          bsonType: 'string',
          description: 'nombre del género, si existe, debe ser de tipo string'
        },
        gen_abreviatura: {
          bsonType: 'string',
          description: 'abreviatura del género, si existe, debe ser de tipo string'
        }
      }
    }
  }
})

use('db_citas_campus')
db.createCollection('acudiente', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'acudiente object validation',
      required: ['acu_codigo', 'acu_nombreCompleto', 'acu_telefono'],
      properties: {
        acu_codigo: {
          bsonType: 'int',
          description: 'código del acudiente es requerido y debe ser de tipo integer'
        },
        acu_nombreCompleto: {
          bsonType: 'string',
          description: 'nombre completo del acudiente debe ser obligatorio y de tipo string'
        },
        acu_telefono: {
          bsonType: 'number',
          description: 'teléfono del acudiente, si existe, debe ser de tipo number'
        },
        acu_direccion: {
          bsonType: 'string',
          description: 'dirección del acudiente, si existe, debe ser de tipo string'
        }
      }
    }
  }
})

use('db_citas_campus')
db.createCollection('usuario', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'usuario object validation',
      required: ['usu_id', 'usu_nombre', 'usu_primer_apellido_usuar', 'usu_email', 'usu_tipodoc', 'usu_genero', 'usu_acudiente'],
      properties: {
        usu_id: {
          bsonType: 'int',
          description: 'ID del usuario es requerido y debe ser de tipo integer'
        },
        usu_nombre: {
          bsonType: 'string',
          description: 'nombre del usuario, si existe, debe ser de tipo string'
        },
        usu_segundo_nombre: {
          bsonType: 'string',
          description: 'segundo nombre del usuario, si existe, debe ser de tipo string'
        },
        usu_primer_apellido_usuar: {
          bsonType: 'string',
          description: 'primer apellido del usuario, si existe, debe ser de tipo string'
        },
        usu_segdo_apellido_usuar: {
          bsonType: 'string',
          description: 'segundo apellido del usuario, si existe, debe ser de tipo string'
        },
        usu_telefono: {
          bsonType: 'string',
          description: 'teléfono del usuario, si existe, debe ser de tipo string'
        },
        usu_direccion: {
          bsonType: 'string',
          description: 'dirección del usuario, si existe, debe ser de tipo string'
        },
        usu_email: {
          bsonType: 'string',
          description: 'correo electrónico del usuario, si existe, debe ser de tipo string'
        },
        usu_tipodoc: {
          bsonType: 'int',
          description: 'ID del tipo de documento del usuario, si existe, debe ser de tipo integer'
        },
        usu_genero: {
          bsonType: 'int',
          description: 'ID del género del usuario, si existe, debe ser de tipo integer'
        },
        usu_acudiente: {
          bsonType: 'int',
          description: 'ID del acudiente del usuario, si existe, debe ser de tipo integer'
        }
      }
    }
  }
})

use('db_citas_campus')
db.createCollection('especialidad', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'especialidad object validation',
      required: ['esp_id', 'esp_nombre'],
      properties: {
        esp_id: {
          bsonType: 'int',
          description: 'ID de la especialidad es requerido y debe ser de tipo integer'
        },
        esp_nombre: {
          bsonType: 'string',
          description: 'nombre de la especialidad, si existe, debe ser de tipo string'
        }
      }
    }
  }
})

use('db_citas_campus')
db.createCollection('consultorio', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'consultorio object validation',
      required: ['cons_codigo', 'cons_nombre'],
      properties: {
        cons_codigo: {
          bsonType: 'int',
          description: 'código del consultorio es requerido y debe ser de tipo integer'
        },
        cons_nombre: {
          bsonType: 'string',
          description: 'nombre del consultorio, si existe, debe ser de tipo string'
        }
      }
    }
  }
})

use('db_citas_campus')
db.createCollection('medico', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'medico object validation',
      required: ['med_nroMatriculaProfesional', 'med_nombreCompleto', 'med_consultorio', 'med_especialidad'],
      properties: {
        med_nroMatriculaProfesional: {
          bsonType: 'int',
          description: 'número de matrícula profesional del médico, es requerido y debe ser de tipo integer'
        },
        med_nombreCompleto: {
          bsonType: 'string',
          description: 'nombre completo del médico, es requerido y debe ser de tipo string'
        },
        med_consultorio: {
          bsonType: 'int',
          description: 'ID del consultorio del médico, si existe, debe ser de tipo integer'
        },
        med_especialidad: {
          bsonType: 'int',
          description: 'ID de la especialidad del médico, si existe, debe ser de tipo integer'
        }
      }
    }
  }
})

use('db_citas_campus')
db.createCollection('estado_cita', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'estado_cita object validation',
      required: ['estcita_id', 'estcita_nombre'],
      properties: {
        estcita_id: {
          bsonType: 'int',
          description: 'ID del estado de cita es requerido y debe ser de tipo integer'
        },
        estcita_nombre: {
          bsonType: 'string',
          description: 'nombre del estado de cita, es requerido y debe ser de tipo string'
        }
      }
    }
  }
})

use('db_citas_campus')
db.createCollection('cita', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'cita object validation',
      required: ['cit_codigo', 'cit_fecha', 'cit_estadoCita', 'cit_medico', 'cit_datosUsuario'],
      properties: {
        cit_codigo: {
          bsonType: 'int',
          description: 'código de la cita, es requerido y debe ser de tipo integer'
        },
        cit_fecha: {
          bsonType: 'date',
          description: 'fecha de la cita, es requerida y debe ser de tipo date'
        },
        cit_estadoCita: {
          bsonType: 'int',
          description: 'ID del estado de la cita, es requerido y debe ser de tipo integer'
        },
        cit_medico: {
          bsonType: 'int',
          description: 'ID del médico de la cita, es requerido y debe ser de tipo integer'
        },
        cit_datosUsuario: {
          bsonType: 'int',
          description: 'ID de los datos de usuario de la cita, es requerido y debe ser de tipo integer'
        }
      }
    }
  }
})

use('db_citas_campus')
db.tipo_documento.insertMany([{
  tipdoc_id: 1,
  tipdoc_nombre: 'Cédula de Ciudadanía',
  tipdoc_abreviatura: 'CC'
}, {
  tipdoc_id: 2,
  tipdoc_nombre: 'Tarjeta de Identidad',
  tipdoc_abreviatura: 'TI'
}])

use('db_citas_campus')
db.genero.insertMany([{
  gen_id: 1,
  gen_nombre: 'Masculino',
  gen_abreviatura: 'M'
}, {
  gen_id: 2,
  gen_nombre: 'Femenino',
  gen_abreviatura: 'F'
}])

use('db_citas_campus')
db.acudiente.insertMany([{
  acu_codigo: 1,
  acu_nombreCompleto: 'María Pérez',
  acu_telefono: 123456789,
  acu_direccion: 'Calle 123'
}, {
  acu_codigo: 2,
  acu_nombreCompleto: 'Juan Gómez',
  acu_telefono: 987654321,
  acu_direccion: 'Avenida 456'
}])

use('db_citas_campus')
db.usuario.insertMany([{
  usu_id: 1,
  usu_nombre: 'Luis',
  usu_primer_apellido_usuar: 'González',
  usu_email: 'luis@example.com',
  usu_tipodoc: 1,
  usu_genero: 1,
  usu_acudiente: 1
}, {
  usu_id: 2,
  usu_nombre: 'Ana',
  usu_primer_apellido_usuar: 'Sánchez',
  usu_email: 'ana@example.com',
  usu_tipodoc: 2,
  usu_genero: 2,
  usu_acudiente: 2
}])

use('db_citas_campus')
db.especialidad.insertMany([{
  esp_id: 1,
  esp_nombre: 'Pediatría'
}, {
  esp_id: 2,
  esp_nombre: 'Dermatología'
}])

use('db_citas_campus')
db.consultorio.insertMany([{
  cons_codigo: 1,
  cons_nombre: 'Consultorio A'
}, {
  cons_codigo: 2,
  cons_nombre: 'Consultorio B'
}])

use('db_citas_campus')
db.medico.insertMany([{
  med_nroMatriculaProfesional: 12345,
  med_nombreCompleto: 'Dr. Juan Pérez',
  med_consultorio: 1,
  med_especialidad: 1
}, {
  med_nroMatriculaProfesional: 54321,
  med_nombreCompleto: 'Dra. María Rodríguez',
  med_consultorio: 2,
  med_especialidad: 2
}])

use('db_citas_campus')
db.estado_cita.insertMany([{
  estcita_id: 1,
  estcita_nombre: 'Programada'
}, {
  estcita_id: 2,
  estcita_nombre: 'Confirmada'
}, {
  estcita_id: 3,
  estcita_nombre: 'Rechazada'
}])

use('db_citas_campus')
db.cita.insertMany([{
  cit_codigo: 1,
  cit_fecha: new Date('2023-08-20T10:00:00Z'),
  cit_estadoCita: 1,
  cit_medico: 1,
  cit_datosUsuario: 1
}, {
  cit_codigo: 2,
  cit_fecha: new Date('2023-08-20T10:00:00Z'),
  cit_estadoCita: 2,
  cit_medico: 2,
  cit_datosUsuario: 2
}, {
  cit_codigo: 3,
  cit_fecha: new Date('2023-08-22T15:30:00Z'),
  cit_estadoCita: 3,
  cit_medico: 1,
  cit_datosUsuario: 2
}])
