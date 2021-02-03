import express from 'express'

const router = express.Router()

const timelineRoute = require('./timeline')
const userRoute = require('./user')
const bulkRoute = require('./bulk')
const logRoute = require('./log')

module.exports = () => {
  router.get('/', (req, res) => res.send(
    {
      title: 'Test Title',
      introduction: 'This is a test timeline.',
      created_by: 'Test Author String',
      categories: [{
        id: 1,
        name: 'Test Topic',
        color: '#99EEFF',
        desc: 'This is a refreshing, cool blue test topic.'
      }],
      events: [
        {
          title: 'Test Event 1',
          categories: [1],
          text: 'This is the text for test event 1'
        }
      ],
      app_meta: {
        acl: ['user_id_1'],
        created_by: 'user_id_1',
        is_draft: false,
        is_hidden: false
      }
    }
  ))

  router.use('/timeline', timelineRoute())
  router.use('/user', userRoute())
  router.use('/bulk', bulkRoute())
  router.use('/log', logRoute())
  return router
}
