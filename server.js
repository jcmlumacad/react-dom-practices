import App from './app'
import http from 'http'

class Server {
  run (app) {
    const server = http.createServer(app)
    const port = process.env.NODE_PORT || 3000

    server.listen(port, () => {
      console.log(`Server listening on localhost:${port}, Ctrl+C to stop`)
    })
  }
}

const app = new App()
const _server = new Server()
let server = _server.run(app.activate())

export default server
