import express from 'express'

const router = express.Router()

const timelineRoute = require('./timeline')
const userRoute = require('./user')
const bulkRoute = require('./bulk')
const logRoute = require('./log')

module.exports = () => {
  router.get('/', (req, res) => res.send({ title: 'placeholder' }))

  router.use('/timeline', timelineRoute())
  router.use('/user', userRoute())
  router.use('/bulk', bulkRoute())
  router.use('/log', logRoute())
  return router
}
