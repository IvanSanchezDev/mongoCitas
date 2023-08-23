import express from 'express'
import { appCitas } from './routes/citas.routes.js'
import { appUsuario } from './routes/usuario.routes.js'
import { appMedico } from './routes/medico.routes.js'
const app = express()

app.use(express.json())

app.use('/api/cita', appCitas)
app.use('/api/medico', appMedico)
app.use('/api/usuario', appUsuario)

const port = process.env.PORT ?? 1234

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`)
})
