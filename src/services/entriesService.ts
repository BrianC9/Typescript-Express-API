import entriesData from '../entries.json'
import { Entry, NewEntry, NonSensitiveInfoEntry } from '../types'

const entries: Entry[] = entriesData as Entry[]

export const getAllEntries = (): Entry[] => entries

export const createEntry = (newEntry: NewEntry): Entry => {
  const newEntryWithId: Entry = {
    id: entries.length + 1,
    ...newEntry
  }

  entries.push(newEntryWithId)

  return newEntryWithId
}

export const findEntryById = (id: number): Entry | undefined => {
  const entry = entries.find(entry => entry.id === id)

  if (entry != null) {
    return entry
  }

  return undefined
}

export const getEntriesWithoutSensitiveEntryInfo = (): NonSensitiveInfoEntry [] => {
  return entries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}
export const deleteEntryById = (id: number): Entry | undefined => {
  const entryToDelete = findEntryById(id)

  if (entryToDelete != null) {
    return entryToDelete
  }

  return undefined
}
