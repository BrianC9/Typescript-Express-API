# User Story

Our user is a pilot who wants to record information about the flights he has made, in the form of a diary entries.
In each entry he wants to record the weather conditions, the date, the visibility and a commentary on the flight.

## How to run this project

```bash
git clone this-project

cd this-project

npm install

npm run dev

```

## API especifications

- Database: **JSON File**
- Base url: **/api/v1/entries**
- Entry scheme:

```ts
enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}
enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Windy = "windy",
  Stormy = "stormy",
}
interface Entry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}
```

- API has a validation system to check if the values passed for the weather, visbility and date fields are valid inputs.

## Endpoints

To ensure the user can access his flight history, I created the following endpoints for him to query

### Retrieve all the entries

- Method: **GET**
- Endpoint: **/**
- Expected successfully response: **200 OK**

```json
[
  {
    "id": 1,
    "date": "2017-01-01",
    "weather": "rainy",
    "visibility": "poor",
    "comment": "Pretty scary flight, I'm glad I'm alive"
  }
  ...{}
]

```

- Exected error response in case there is no entries in the DB: **204 NO CONTENT**

### Retrive ONE entry by the id

- Method: **GET**
- Endpoint : **/:id**
- Expected param: **number**
- Expected successfully response: **200 OK**

```json
{
  "id": 1,
  "date": "2017-01-01",
  "weather": "rainy",
  "visibility": "poor",
  "comment": "Pretty scary flight, I'm glad I'm alive"
}
```

- Expected error response for invalid id, not parseable to a number: **400 BAD REQUEST**
- Expected error response for non exist entry with the id: **404 NOT FOUND**

### Create a new entry

- Method: **POST**
- Endpoint : **/**
- Expected body:

```json
{
  "date": "a valid date",
  "weather": "a valid Weather",
  "visibility": "a valid Visibility",
  "comment": "string"
}
```

- Expected successfully response: **200 OK**

```json
{
  "id": 1,
  "date": "2017-01-01",
  "weather": "rainy",
  "visibility": "poor",
  "comment": "Pretty scary flight, I'm glad I'm alive"
}
```

- Expected error response for invalid body or invalid values for the date, Weather or Visbility: **400 BAD REQUEST**

### Delete an entry

- Method: **DELETE**
- Endpoint : **/:id**
- Expected param: **number**
- Expected successfully response: **200 OK** & the resource you have just deleted

```json
{
  "id": 1,
  "date": "2017-01-01",
  "weather": "rainy",
  "visibility": "poor",
  "comment": "Pretty scary flight, I'm glad I'm alive"
}
```

- Expected error response for invalid id, not parseable to a number: **400 BAD REQUEST**
- Expected error response for non exist entry with the id: **404 NOT FOUND**
