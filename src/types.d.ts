export type Weather= "sunny" | "cloudy" | "windy" | "rainy" | "stormy"
export type Visibility = "great" | "good" | "ok" | "poor"

export interface EntryI {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}
