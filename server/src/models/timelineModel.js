import mongoose from 'mongoose'

export const TimelineSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: { unique: true }
  },
  introduction: String,
  created_by: String, // Author information for display... system metadata (for logging, etc.) below
  categories: [{
    id: {
      type: Number,
      required: true,
      index: { unique: true, default: 0 }
    }, // incrementing integer... increment logic in vue?
    name: {
      type: String,
      required: true
    },
    color: {
      type: String, // hex
      required: true
    },
    desc: String
  }],
  events: [{
    title: {
      type: String, // hex
      required: true
    },
    categories: [Number], // category id
    cap_link: String,
    link: String,
    text: String,
    thumb: Buffer
    // What else do we need? Disposition? Collapsed/Visible? Hidden? Draft? Author?
  }],
  app_meta: { // DOESN'T GET EXPORTED (unless it's a complete DB Dump) — instance-specific info
    acl: [String], // id
    created_by: String,
    is_draft: Boolean,
    is_hidden: Boolean
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Timeline', TimelineSchema)
