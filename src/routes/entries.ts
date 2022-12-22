import { Router } from 'express'
import * as entriesServices from '../services/entriesService'
import toNewEntry from '../utils/utils'

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

entriesRouter.post('/', (req, res) => {
  try {
    const newEntryToCreate = toNewEntry(req.body)
    const entryCreated = entriesServices.createEntry(newEntryToCreate)
    res.status(201).send({ entry: entryCreated })
  } catch (E) {
    res.status(400).send(E)
  }
})

entriesRouter.delete('/:id', (req, res) => {
  const id = Number(req.params.id)

  const entryDeleted = entriesServices.deleteEntryById(id)
  if (entryDeleted != null) {
    res.status(204).send(entryDeleted)
  }
  res.status(404).send(`There is no entry with id: ${id}`)
})

entriesRouter.put('/:id', (req, res) => {
  const id = Number(req.params.id)

  res.status(404).send(`There is no entry with id: ${id}`)
})
entriesRouter.put('')
export default entriesRouter
