import { Weather, Visibility, NewEntry } from '../types'

const parseComment = (commentFromReq: any): string => {
  if (!isString(commentFromReq)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromReq
}
const isString = (stringToCheck: any): boolean => {
  return (typeof stringToCheck === 'string' || stringToCheck instanceof String)
}

const parseDate = (dateFromReq: any): string => {
  if (!isString(dateFromReq) || !isDate(dateFromReq)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromReq
}

const isDate = (dateToCheck: string): boolean => {
  return Boolean(Date.parse(dateToCheck))
}

const parseWeather = (weatherFromReq: any): Weather => {
  if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
    throw new Error('Incorrect or missin weather')
  }
  return weatherFromReq
}

const isWeather = (stringToCheck: any): boolean => {
  return Object.values(Weather).includes(stringToCheck)
}

const parseVisibility = (visibilityFromReq: any): Visibility => {
  if (!isString(visibilityFromReq) || !isVisbility(visibilityFromReq)) {
    throw new Error('Incorrect or missin visibility')
  }
  return visibilityFromReq
}

const isVisbility = (stringToCheck: any): boolean => {
  return Object.values(Visibility).includes(stringToCheck)
}

const toNewEntry = (object: any): NewEntry => {
  if (object.id != null) {
    throw new Error('The id is generated on the server')
  }
  const newEntry: NewEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)

  }
  return newEntry
}

export default toNewEntry
