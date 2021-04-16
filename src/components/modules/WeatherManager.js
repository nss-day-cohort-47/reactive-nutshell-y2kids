import { weatherKey } from "../../../src/apiKeys"

export const getFutureWeather = (date, location) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${weatherKey}`)
        .then(response => response.json())
}

export const getCurrentWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Nashville&units=imperial&appid=${weatherKey}`)
        .then(response => response.json())
}