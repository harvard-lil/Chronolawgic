import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
const port = 3000

const routes = require('./src/routes')
const config = require('./src/config/environment')

mongoose.Promise = global.Promise
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.json())
app.use(cors())

app.use('/', routes())


app.listen(port, () => console.log('Server Running'))

// TODO - hook up passport JWT middleware
// TODO — Set up authentication backend
// TODO - Fill in timeline controller logic with system metadata, etc.
// TODO - Connect log back-end to logging system and other controllers
// TODO - Fill in controllers with user checks for specific user types
// TODO — Write Logic: Set /bulk
// TODO — Update schema to fit front-end

/*
Proposed authentication Request Actions
    **This requires the admin to set temporary passwords and deal with users directly. Is that ok?**

    * Unauthenticated:
        * GET /timeline list
        * GET /timeline/:id if it's not a draft
        * POST /auth to check auth

    * Authenticated:
        * Everything above plus:
        * GET /timeline/:id if it's a draft they explicitly have permission to edit
        * GET /timeline list which includes drafts they have permission to edit
        * POST /timeline/:id to update a timeline which they have permission to edit
        * PUT /timeline to create timeline if they have create permissions
        * DELETE /timeline/:id if they created the timeline (just hides it, only admins can delete)
        * GET /user/:id to see their own activity and info
        * PATCH /user/:id to update their own info, including password

    * Power User:
        * Everything above for all timelines regardless if they have explicit permissions,
          **except for** PATCH /users/:id for other users (only for themselves) plus:
        * GET /user for a user list
        * GET /user/:id for a user profile/log

    * Administrator:
        * Everything above plus
        * PUT /user for new users
        * PATCH /user/:id to update any user profile
        * DELETE /user/:id
            * if user is enabled, it will hide it
            * if user is disabled, it will delete it permanently. Front & back end need to handle
              non-existant users gracefully in activity lists, etc.)
        * DELETE /timeline/:id
            * if timeline is public, it will hide it
            * if timeline is hidden, it will delete it permanently
        * GET /bulk will export a zipped version of the entire DB including users w/blanked out
          password hashes
        * PUT /bulk replace the current DB with the output of GET /bulk. All user passwords
          will need to be manually set for any users to log in
        * PATCH /bulk will add timelines from the output of GET /bulk if their slugs don't exist
          in the current DB. Optionally, it will overwrite timelines with the same name.

*/
