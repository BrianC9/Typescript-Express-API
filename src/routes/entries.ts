import { Router } from 'express'
import * as entriesServices from '../services/entriesService'
import toNewEntry from '../utils/utils'

const entriesRouter = Router()

entriesRouter.get('/', (_req, res) => {
  const entries = entriesServices.getAllEntries()
  if (entries.length === 0) return res.status(204)
  return res.send(entries)
})

entriesRouter.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) return res.status(400).send('Introduce a valid id')
  const entry = entriesServices.findEntryById(id)
  return (entry != null)
    ? res.send(entry)
    : res.status(404).send(`There is no entry with id: ${id}`)
})

entriesRouter.post('/', (req, res) => {
  try {
    const newEntryToCreate = toNewEntry(req.body)
    const entryCreated = entriesServices.createEntry(newEntryToCreate)
    res.status(201).send(entryCreated)
  } catch (E) {
    res.status(400).send(E)
  }
})

entriesRouter.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) return res.status(400).send('Introduce a valid id')

  const entryDeleted = entriesServices.deleteEntryById(id)
  if (entryDeleted != null) {
    res.status(204).send(entryDeleted)
  }
  return res.status(404).send(`There is no entry with id: ${id}`)
})

export default entriesRouter
