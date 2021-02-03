import passport from 'passport'
import { User } from '../models/User'
import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt'
import { Strategy as LocalStrategy } from 'passport-local'

const config = require('../config/environment')

passport.use(
  'signup',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    async (username, password, done) => {
      try {
        const user = await User.create({ username, password })

        return done(null, user)
      } catch (error) {
        done(error)
      }
    }
  )
)

passport.use(
  'login',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ username })

        if (!user) {
          return done(null, false, { message: 'User not found' })
        }

        const validate = await user.isValidPassword(password)

        if (!validate) {
          return done(null, false, { message: 'Wrong Password' })
        }

        return done(null, user, { message: 'Logged in Successfully' })
      } catch (error) {
        return done(error)
      }
    }
  )
)

passport.use(
  new JWTstrategy(
    {
      secretOrKey: config.secret_key,
      jwtFromRequest: ExtractJwt.fromUrlQueryParameter('secret_token')
    },
    async (token, done) => {
      try {
        return done(null, token.user)
      } catch (error) {
        done(error)
      }
    }
  )
)
