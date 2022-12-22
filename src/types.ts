// export type Weather = 'sunny' | 'cloudy' | 'windy' | 'rainy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Windy = 'windy',
  Stormy = 'stormy'
}
export interface Entry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSensitiveInfoEntry = Pick<Entry, 'id' | 'date' | 'weather' | 'visibility'>
// Omit

export type NonSensitiveInfoEntry = Omit<Entry, 'comment'>

export type NewEntry = Omit<Entry, 'id'>
