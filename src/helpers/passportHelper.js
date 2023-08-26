import passport from 'passport'
import { Strategy as BearerStrategy } from 'passport-http-bearer'
import { verifyToken } from './jwt.js'

passport.use(new BearerStrategy(

  { passReqToCallback: true },
  async function (req, token, done) {
    try {
      const personal = await verifyToken(req, token)
      if (Object.keys(personal).length === 0) return done(null, false)
      // if (!personal) return done(null, false)

      return done(null, personal)
    } catch (error) {
      console.log(error.message)
    }
  }

))

export default passport
