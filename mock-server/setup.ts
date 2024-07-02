import express from 'express'
import { authRoute } from './routes/authRoute'

const setup = (server: express.Express): express.Express => {
  server.use(express.urlencoded({ extended: false }))
  server.use(express.json())
  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.header('origin'))
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-From'
    )
    res.header('Access-Control-Allow-Credentials', 'true')

    if (req.method == 'OPTIONS') {
      res.header(
        'Access-Control-Allow-Methods',
        'PUT, POST, PATCH, DELETE, GET'
      )
      return res.status(200).json({})
    }

    next()
  })

  server.use('/health', function (req, res, next) {
    res.json({ status: 'ok' })
  })
  server.use('/api/v1/auth', authRoute)
  return server
}

export default setup
