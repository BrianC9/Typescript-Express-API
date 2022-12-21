export type Weather = 'sunny' | 'cloudy' | 'windy' | 'rainy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

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
