import express from 'express'

const router = express.Router()

const timelineRoute = require('./timeline')
const userRoute = require('./user')
const bulkRoute = require('./bulk')
const logRoute = require('./log')

module.exports = () => {
  router.get('/', (req, res) => res.send(
    {
      id: 1,
      title: 'Timeline Title',
      created_by: 'Editable Text', // (user accts are for auth/logging purposes)
      categories: {
        Case: { id: '1', color: '#FF9911' },
        Legislation: { id: '2', color: '#99FF11' },
        ExecutiveOrder: { id: '3', color: '#FF9988' },
        Anarchism: { id: '4', color: '#11FF99' },
        Police: { id: '5', color: '#8899FF' },
        Fascism: { id: '6', color: '#1199FF' }
      },
      events: {
        0: {
          title: 'Case 1',
          categories: [1, 3],
          cap_link: 'https://cite.case.law/ill/1/176/',
          link: false,
          description: 'Though the Court upheld a conviction for membership in a group that advocated the overthrow of the state, Justice Brandeis explained, in a separate opinion, that under the "clear and present danger test" the strong presumption must be in favor of "more speech, not enforced silence." That view, which ultimately prevailed, laid the groundwork for modern First Amendment law.',
          start_year: 1880,
          thumb: 123
        },
        1: {
          title: 'Case 2',
          categories: [1, 2],
          cap_link: 'https://cite.case.law/ill/1/176/',
          link: false,
          description: "Our first Supreme Court landmark. Though upholding the defendant's conviction for distributing his call to overthrow the government, the Court held, for the first time, that the Fourteenth Amendment \"incorporates\" the free speech clause of the First Amendment and is, therefore, applicable to the states.",
          start_year: 1881,
          thumb: 123
          // What else do we need? Disposition? Collapsed/Visible? Hidden? Draft? Author?
        },
        2: {
          title: 'Case 3',
          categories: [1, 2],
          cap_link: 'https://cite.case.law/ill/1/176/',
          link: false,
          description: "Our first Supreme Court landmark. Though upholding the defendant's conviction for distributing his call to overthrow the government, the Court held, for the first time, that the Fourteenth Amendment \"incorporates\" the free speech clause of the First Amendment and is, therefore, applicable to the states.",
          start_year: 1880,
          thumb: 123
          // What else do we need? Disposition? Collapsed/Visible? Hidden? Draft? Author?
        }
      },
      years: { 1880: [0, 2], 1881: [1] },
      app_meta: { // DOESN'T GET EXPORTED — implementation specific
        acl: [],
        created_by: 1,
        is_draft: true,
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
