export {fetchCurrentWeather};
// Get current weather based on name
async function fetchCurrentWeather(place, unit) {
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=${unit}&appid=0c1386551b420256c03b9319b32aec4a`, {mode: 'cors'});
    const weatherData = await weather.json();
    return weatherData;
}