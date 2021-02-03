import mongoose from 'mongoose'
import sanitize from 'mongo-sanitize'
import { logSchema } from '../models/logModel'
const Log = mongoose.model('Log', logSchema)

const getAllLogEntries = (req, res) => {
  Log.find({}, (err, log) => {
    if (err) {
      res.send(err)
    }
    console.log(log)
    res.json(log)
  })
}

const getLogEntry = (req, res) => {
  const idOrTitle = mongoose.Types.ObjectId.isValid(req.params.title)
  const filter = idOrTitle ? { _id: req.params.title } : { title: req.params.title }
  Log.findOne(filter, (err, titleLog) => {
    if (err) {
      res.send(err)
    }
    res.json(titleLog)
  })
}

const addLogEntry = (req, res) => {
  const sanitizedDoc = sanitize(req.body) // belt-and-suspenders- shouldn't be necessary with a complete mongoose schema
  const newLog = new Log(sanitizedDoc)
  newLog.save((err, log) => {
    if (err) {
      res.send(err)
    }
    res.json(log)
  })
}

export { getAllLogEntries, getLogEntry, addLogEntry}
