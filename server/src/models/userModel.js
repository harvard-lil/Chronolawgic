import bcrypt from 'bcrypt'
import mongoose from 'mongoose'



export const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    index: { unique: true },
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  is_enabled: {
    type: Boolean,
    required: true
  },
  is_power_user: {
    type: Boolean,
    required: true
  },
  is_admin: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

UserSchema.pre(
  'save',
  async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
  }
)

UserSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', UserSchema)
