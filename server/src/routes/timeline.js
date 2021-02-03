import express from 'express'
import {
  addTimeline,
  deleteTimeline,
  getTimeline,
  listTimelines,
  updateTimeline
} from '../controllers/timelineController'

const router = express.Router()

module.exports = () => {
  router.route('/')
    .get(listTimelines)
    .post(addTimeline)

  router.route('/:title?')
    .get(getTimeline)

  router.route('/:id?')
    .patch(updateTimeline)
    .delete(deleteTimeline)
  return router
}
