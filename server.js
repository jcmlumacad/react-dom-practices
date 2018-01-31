import { App } from './app'
import { createServer } from 'http'

class Server {
  constructor (app) {
    const server = createServer(app)
    const port = process.env.NODE_PORT || 3000

    server.listen(port, () => {
      console.log(`Server listening on localhost:${port}, Ctrl+C to stop`)
    })
  }
}

export const server = new Server(App())
