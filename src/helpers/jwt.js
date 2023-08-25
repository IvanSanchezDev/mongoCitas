import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { connect } from '../database/connection.js'

dotenv.config()

export const crearToken = async (req, res, next) => {
  try {
    console.log(req.body)
    if (Object.keys(req.body).length === 0) return res.status(400).send({ message: 'Datos no enviados' })
    const db = await connect()
    const personal = db.collection('personal')
    const result = await personal.findOne(req.body)
    if (!result) return res.status(401).send({ message: 'Usuario no encontrado' })
    const id = result._id.toString()
    const tokenJwt = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' })
    req.data = { status: 200, token: tokenJwt }
    next()
  } catch (error) {
    console.log('error en middleware create token: ' + error.message)
  }
}
