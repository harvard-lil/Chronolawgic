import mongoose from 'mongoose'

const LogSchema = mongoose.Schema({
  endpoint: String,
  verb: String,
  desc: String,
  timeline_delta: {},
  created_by: String,
  is_admin: { type: Boolean, required: true },
  is_error: Boolean,
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Log', LogSchema)
