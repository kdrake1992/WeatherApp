export {fetchMeByZip, fetchCurrentWeather, fetchForecast};
async function fetchMeByZip(place) {
    const weather = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid=0c1386551b420256c03b9319b32aec4a`, {mode: 'cors'});
    const weatherData = await weather.json();
    return weatherData;
}

// Get current weather based on name
async function fetchCurrentWeather(place, unit) {
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=${unit}&appid=0c1386551b420256c03b9319b32aec4a`, {mode: 'cors'});
    const weatherData = await weather.json();
    return weatherData;
}

// Get future forecast
async function fetchForecast(place, unit) {
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${place}&units=${unit}&appid=0c1386551b420256c03b9319b32aec4a`, {mode: 'cors'});
    const weatherData = await weather.json();
    return weatherData;
}