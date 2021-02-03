import express from 'express'

const router = express.Router()

module.exports = () => {
  router.route('/:id')
    .get((req, res) => {
      return res.send({ title: 'bulk_get' })
    })
    .post((req, res) => {
      return res.send({ title: 'bulk_post' })
    })
    .delete((req, res) => {
      return res.send({ title: 'bulk_delete' })
    })
    .patch((req, res) => {
      return res.send({ title: 'bulk_patch' })
    })
  return router
}
