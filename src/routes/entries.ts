import { Router } from 'express'
import * as entriesServices from '../services/entriesService'

const entriesRouter = Router()

entriesRouter.get('/', (_req, res) => {
  res.send(entriesServices.getAllEntries())
})

entriesRouter.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const entry = entriesServices.findEntryById(id)
  return (entry != null)
    ? res.send(entry)
    : res.status(404).send(`There is no entry with id: ${id}`)
})

entriesRouter.post('/', (_req, res) => {
  res.send('CREATE new entry')
})

export default entriesRouter
