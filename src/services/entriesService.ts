import entriesData from '../entries.json'
import { EntryI } from '../types';

const entries: Array<EntryI> = entriesData as Array<EntryI>;

export const getAllEntries = () => entries;
export const createEntry = () => null;

export default{ getAllEntries, createEntry}