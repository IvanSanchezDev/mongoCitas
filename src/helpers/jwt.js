import { SignJWT, jwtVerify } from 'jose'
import dotenv from 'dotenv'
import { connect } from '../database/connection.js'
import { ObjectId } from 'mongodb'

dotenv.config('../../')

export const crearToken = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) return res.status(400).send({ message: 'Datos no enviados' })
  const db = await connect()
  const personal = db.collection('personal')
  const result = await personal.findOne(req.body)
  if (!result) return res.status(401).send({ message: 'Usuario no encontrado' })
  const encoder = new TextEncoder()
  const id = result._id.toString()
  const jwtConstructor = await new SignJWT({ id })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt()
    .setExpirationTime('3h')
    .sign(encoder.encode(process.env.JWT_SECRET))
  req.data = { status: 200, message: jwtConstructor }
  next()
}

export const verifyToken = async (req, token) => {
  try {
    const encoder = new TextEncoder()
    const jwtData = await jwtVerify(
      token,
      encoder.encode(process.env.JWT_SECRET)
    )
    const db = await connect()
    const personal = db.collection('personal')
    const result = await personal.findOne({
      _id: new ObjectId(jwtData.payload.id),
      [`permisos.${req.baseUrl.slice(4)}`]: `${req.headers['accept-version']}`
    })

    const { _id, permisos, ...usuario } = result

    return usuario
  } catch (error) {
    return false
  }
}
