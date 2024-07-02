import type { IncomingMessage, ServerResponse } from 'http'

import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer({
  target: process.env.API_URL,
  changeOrigin: true,
})
export default function (req: IncomingMessage, res: ServerResponse, next) {
  return new Promise((resolve) => {
    const options = {}

    const origEnd = res.end
    res.end = function () {
      resolve(null)
      return origEnd.call(res)
    }

    proxy.web(req, res, options) // proxy.web() works asynchronously
  })
}
