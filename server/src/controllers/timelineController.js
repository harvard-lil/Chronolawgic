import mongoose from 'mongoose'
import sanitize from 'mongo-sanitize'
import { TimelineSchema } from '../models/timelineModel'
const Timeline = mongoose.model('Timeline', TimelineSchema)

const listTimelines = (req, res) => {
  Timeline.find({}, (err, timeline) => {
    if (err) {
      res.send(err)
    }
    console.log(timeline)
    res.json(timeline)
  })
}

const getTimeline = (req, res) => {
  const idOrTitle = mongoose.Types.ObjectId.isValid(req.params.title)
  const filter = idOrTitle ? { _id: req.params.title } : { title: req.params.title }
  Timeline.findOne(filter, (err, titleTimeline) => {
    if (err) {
      res.send(err)
    }
    res.json(titleTimeline)
  })
}

const addTimeline = (req, res) => {
  const sanitizedDoc = sanitize(req.body) // belt-and-suspenders- shouldn't be necessary with a complete mongoose schema
  const newTimeline = new Timeline(sanitizedDoc)
  newTimeline.save((err, timeline) => {
    if (err) {
      res.send(err)
    }
    res.json(timeline)
  })
}

const updateTimeline = (req, res) => {
  const sanitizedDoc = sanitize(req.body) // belt-and-suspenders- shouldn't be necessary with a complete mongoose schema
  Timeline.findOneAndUpdate({ _id: req.params.id }, sanitizedDoc, { new: true, useFindAndModify: false }, (err, timeline) => {
    if (err) {
      res.send(err)
    }
    res.json(timeline)
  })
}

const deleteTimeline = (req, res) => {
  // TODO: this should just hide the timeline if it's not already hidden. If it's already hidden,
  Timeline.remove({ _id: req.params.id }, { new: true, useFindAndModify: false }, (err, timeline) => {
    if (err) {
      res.send({ message: 'deleted timeline: ' + req.params.id })
    }
    res.json(timeline)
  })
}

export { listTimelines, getTimeline, addTimeline, updateTimeline, deleteTimeline }
