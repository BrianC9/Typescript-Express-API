import express from 'express'
import entriesRouter from './routes/entries'

const app = express()

app.use(express.json())

const PORT = 3000
app.get('/', (req, res) => {
  const JSONIndex = { Endpoint: `${req.path}`, Date: new Date().toLocaleString() }

  res.send(JSONIndex)
})

app.get('/ping', (_req, res) => {
  console.log('Someone pinged this endpoint')
  res.send('PONG')
})

app.use('/api/v1/entries', entriesRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
