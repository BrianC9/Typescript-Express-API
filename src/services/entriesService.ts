import entriesData from '../entries.json'
import { EntryI } from '../types'

const entries: EntryI[] = entriesData as EntryI[]

export const getAllEntries = (): EntryI[] => entries
export const createEntry = (): undefined => undefined

export default { getAllEntries, createEntry }
