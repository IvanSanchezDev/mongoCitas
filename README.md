# Gestión Citas



## Pasos instalación:

    1. Descargue o clone el repositorio
    2. Ejecutar la bd esta en la direccion src/database/schemasCitas.mongodb
    3. Ejecutar el siguiente comando para instalar las dependencias necesarias para que funcione => npm i
    4. configurar archivo .env en la raiz del proyecto y  como esta en el .envexample
    5. ejecutar el proyecto => npm run dev
    6. Generar token correspondientes
    7. Probar EndPoints



### GENERACION DE TOKEN

En este caso simularemos un inicio de sesion y a partir de eso, generaremos un token el cual nos permitira utilizar los diferentes endpoints

Existen dos usuarios ['paciente', 'admin'] los pacientes tendran acceso a todos los endpoints relacionados con citas y los admin a todos los endpoints, empezaremos generado el acceso a un personal de tipo paciente: 

POST => http://localhost:1234/login

datos de entrada paciente: 

{

"nombre":"Jhon"

}

Esto nos generara un token jwt, el cual puedes copiar y pegar en los headers con el nombre ***Authorization*** y  asi mismo crearemos un nuevo header con el nombre ***Accept-Version*** y especificaremos siempre *1.0.0* ya que es la versión estable por el momento.



datos de entrada admin: 

{

"nombre":"Marcos"

}

Esto nos generara un token jwt, el cual puedes copiar y pegar en los headers con el nombre ***Authorization*** y  asi mismo crearemos un nuevo header con el nombre ***Accept-Version*** y especificaremos por el momento "*" ya que es el admin puede entrar a todos las apis y versiones



## EndPoints

- _Todos los EndPoints son de tipo GET_

1. Obtener todos los pacientes alfabéticamente => http://127.0.0.1:1234/api/paciente/getCitas
2. Obtener todas las citas próximas => http://localhost:1234/api/paciente/proximaCita
3. Encontrar las citas que hay en una fecha especifica => http://localhost:1234/api/paciente/citasFechaEspecifica?fecha=2023-08-20T10:00:00Z
4. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 12345 en '2023-08-20'**) =>http://localhost:1234/api/paciente/citasFechaMedicoEspecifico/12345?fecha=2023-08-20T10:00:00Z
5. Obtener todas las citas realizadas por los pacientes de un genero=> http://localhost:1234/api/paciente/citasPorGenero/F
6. Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico. => http://localhost:1234/api/paciente/citasRechazadas
7. Mostrar todos los médicos con una especialidad especifica=> http://localhost:1234/api/admin/getMedicos/Pediatría    (DEBER ESTAR AUTENTICADO COMO ADMIN)
8. Obtener los médicos y sus consultorios => http://127.0.0.1:1234/api/admin/medicosAndConsultorios    (DEBER ESTAR AUTENTICADO COMO ADMIN)
9. Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 54321) => http://127.0.0.1:1234/api/admin/usuariosMedicoEspecifico/54321     (DEBER ESTAR AUTENTICADO COMO ADMIN)
10. Obtener todos los usuarios=> http://127.0.0.1:1234/api/admin/getUsuarios   (DEBER ESTAR AUTENTICADO COMO ADMIN)