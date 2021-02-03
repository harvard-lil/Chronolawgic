require('dotenv').config()
const bunyan = require('bunyan')

const configurationSets = {
  test: {
    database: process.env.TEST_DB_DSN,
    log: () => bunyan.createLogger({ name: 'development', level: 'debug' }),
    secret_key: process.env.SECRET_KEY
  },
  dev: {
    database: process.env.DEVELOPMENT_DB_DSN,
    log: () => bunyan.createLogger({ name: 'test', level: 'fatal' }),
    secret_key: process.env.SECRET_KEY
  },
  prod: {
    database: process.env.PRODUCTION_DB_DSN,
    log: bunyan.createLogger({ name: 'production', level: 'info' }),
    secret_key: process.env.SECRET_KEY
  }
}

module.exports = configurationSets[process.env.npm_lifecycle_event]
