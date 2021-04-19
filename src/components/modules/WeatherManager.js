import { weatherKey } from "../../../src/apiKeys"

export const getFutureWeather = (location) => {
    console.log("get future weather call", )
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${weatherKey}`)
        .then(response => response.json())
}

export const getCurrentWeather = () => {
    // return weatherObject
    console.log("get current weather call")
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Nashville&units=imperial&appid=${weatherKey}`)
        .then(response => response.json())
}

const weatherObject = {
    "coord": {
        "lon": -86.7844,
        "lat": 36.1659
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 62.11,
        "feels_like": 59.58,
        "temp_min": 60.8,
        "temp_max": 64,
        "pressure": 1014,
        "humidity": 33
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.61,
        "deg": 0
    },
    "clouds": {
        "all": 1
    },
    "dt": 1618595935,
    "sys": {
        "type": 1,
        "id": 4609,
        "country": "US",
        "sunrise": 1618571516,
        "sunset": 1618618880
    },
    "timezone": -18000,
    "id": 4644585,
    "name": "Nashville",
    "cod": 200
} 