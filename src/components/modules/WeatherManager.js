import { weatherKey } from "../../../src/apiKeys"

export const getFutureWeather = (date, location) => {
return fetch(`api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${weatherKey}`)
.then(response => response.json())
}

export const getCurrentWeather = (location) => {
    return fetch(`api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${weatherKey}`)
    .then(response => response.json())
    }