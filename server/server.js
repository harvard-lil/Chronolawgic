
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000;

app.get('/', cors(), ((req, res) => res.send(
    { "title": "Some Timeline",
        "categories": {
            "Case": { "color": "#FF9911" },
            "Legislation": { "color": "#99FF11" },
            "Executive Order": { "color": "#FF9988" },
            "Anarchism": { "color": "#11FF99" },
            "Police": { "color": "#8899FF" },
            "Fascism": { "color": "#1199FF" },
        },
        "events": [
            {"title": "Cap"}
        ]
    })))

app.listen(port, () => console.log("Server Running"))