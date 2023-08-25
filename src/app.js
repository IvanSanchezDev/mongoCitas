import express from 'express'
import { appCitas } from './routes/citas.routes.js'
import { appUsuario } from './routes/usuario.routes.js'
import { appMedico } from './routes/medico.routes.js'
import { appLogin } from './routes/login.routes.js'
const app = express()

app.use(express.json())

app.use('/api/paciente', appCitas)
app.use('/api/admin', appMedico)
app.use('/api/admin', appUsuario)
app.use('/login', appLogin)

app.use((req, res) => {
  res.status(404).json({ message: '404 route not found' })
})

const port = process.env.PORT ?? 1234

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`)
})
