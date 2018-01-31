import express from 'express'

function App () {
  let app = express()

  app.use('/dist', express.static(`${__dirname}/public/dist`))
  app.use('/views', express.static(`${__dirname}/resources/views`))

  app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/resources/views/index.html`)
  })

  return app
}

export { App }
