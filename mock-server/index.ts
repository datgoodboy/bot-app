import express from 'express'
import http from 'http'
import setup from './setup'

const server: http.Server = http.createServer(setup(express()))

const port = process.env.PORT || 8080

server.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
