# Gestión Citas

## Pasos instalación:

    1. Descargue o clone el repositorio
    2. Ejecutar la bd esta en la direccion src/database/schemasCitas.mongodb
    3. Ejecutar el siguiente comando para instalar las dependencias necesarias para que funcione => npm i
    4. configurar archivo .env en la raiz del proyecto y  como esta en el .envexample
    5. ejecutar el proyecto => npm run dev
    6.Generar token correspondientes
    7. Probar EndPoints


## EndPoints

- _Todos los EndPoints son de tipo GET_



1. Obtener todos los pacientes alfabéticamente => http://127.0.0.1:1234/api/cita/getCitas

2. Obtener todas las citas => http://127.0.0.1:1234/api/cita/proximaCita

3. Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**): => http://127.0.0.1:1234/api/cita/

4. Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):

   http://127.0.0.1:1234/api/cita/citasFechaEspecifica

   dato de entrada:

   {

   fecha:"2023-07-12"

   }

5. Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)

   Metodo GET=> http://127.0.0.1:1234/api/cita/

6. Obtener las consultorías para un paciente específico (por ejemplo, paciente **con usu_id 1**)

   Metodo GET => http://127.0.0.1:1234/api/cita/

7. Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)

   Metodo Get=>http://127.0.0.1:1234/api/cita/

8. Obtener los médicos y sus consultorios

   Metodo GET => http://127.0.0.1:1234/api/

9. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)

   Metodo get =>http://127.0.0.1:1234/api/

   {

   fecha:"2023-07-12"

   }

   

   11. Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad

   Metodo GET => http://127.0.0.1:1234/api/

   13. Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.

       Metodo Get=>http://127.0.0.1:1234/api/