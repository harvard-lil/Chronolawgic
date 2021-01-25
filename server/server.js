const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000;

// TODO — Set up database backend
// TODO — Set up authentication backend
// TODO — Write Logic: /timeline
// TODO — Write Logic: /timeline/:id
// TODO — Write Logic: Set /user
// TODO — Write Logic: Set /user/:id
// TODO — Write Logic: Set /auth
// TODO — Write Logic: Set /log
// TODO — Write Logic: Set /bulk

/*

Proposed Timeline Structure

    {
        "id": (auto gen),
        "title": "Timeline Title",
        "created_by": "Editable Text", (user accts are for auth/logging purposes)
        "categories": {
            "Case": { id: "1", "color": "#FF9911" },
            "Legislation": {  id: "2", "color": "#99FF11" },
            "Executive Order": {  id: "3" "color": "#FF9988" },
            "Anarchism": {  id: "4", "color": "#11FF99" },
            "Police": {  id: "5", "color": "#8899FF" },
            "Fascism": {  id: "6", "color": "#1199FF" },
        },
        "events": [
            {
                "title": "Cap",
                "categories": [ 1, 3 ],
                "cap_link": "https://cite.case.law/ill/1/176/",
                "link": false,
                "text": "blah blah blah",
                "thumb": (base64 encoded image),
                // What else do we need? Disposition? Collapsed/Visible? Hidden? Draft? Author?
            }
        ],
        "app_meta": { // DOESN'T GET EXPORTED — implementation specific
            "acl": [:user_id, :user_id, user_id],
            "created_by": user_id,
            "is_draft": bool,
            "is_hidden": bool,
        },
    }

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

Proposed User Object:
    {
        id: (auto gen),
        username: (unique: primary authentication label),
        password: (salted hash),
        is_enabled: bool
        is_power_user: bool
        is_admin: bool
    }

Proposed Activity Log Entry:
    {
        id: (auto gen),
        endpoint: "url endpoint",
        verb: GET/POST/PUT/DELETE

    }

*/


app.get('/', cors(), ((req, res) => res.send( {"title": "endpoint_list"})))
app.get('/timeline', cors(), ((req, res) => res.send( {"title": "placeholder"})))
app.get('/timeline/:id', cors(), ((req, res) => res.send( {"title": "placeholder"})))
app.get('/user/', cors(), ((req, res) => res.send( {"title": "placeholder"})))
app.get('/user/:id', cors(), ((req, res) => res.send( {"title": "placeholder"})))
app.get('/log', cors(), ((req, res) => res.send( {"title": "placeholder"}))) // filters for user and timeline



app.listen(port, () => console.log("Server Running"))