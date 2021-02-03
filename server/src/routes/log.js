import express from 'express'
import { getAllLogEntries, getLogEntry, addLogEntry } from '../controllers/logController'

const router = express.Router()

module.exports = () => {
  router.route('/')
    .get(getAllLogEntries)
    .post(addLogEntry)

  router.route('/:id?')
    .get(getLogEntry)

  return router
}
