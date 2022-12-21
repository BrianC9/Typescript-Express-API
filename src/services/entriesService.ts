import entriesData from '../entries.json'
import { Entry, NonSensitiveInfoEntry } from '../types'

const entries: Entry[] = entriesData as Entry[]

export const getAllEntries = (): Entry[] => entries

export const createEntry = (): undefined => undefined

export const findEntryById = (id: number): NonSensitiveInfoEntry | undefined => {
  const entry = entries.find(entry => entry.id === id)

  if (entry != null) {
    const { comment, ...restOfEntry } = entry
    return restOfEntry
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

export default { getAllEntries, createEntry, getEntriesWithoutSensitiveEntryInfo }
