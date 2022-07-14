export {currentWeather, futureForecast, displayInfo};

// DOM for the body
const body = document.body;

const topSearch = document.createElement('div');
topSearch.classList.add("topSearch");

const main = document.createElement('div');
main.classList.add("currentWeather");

const forecast = document.createElement('div');
forecast.classList.add("forecast");

const footer = document.createElement('div');
footer.classList.add("footer");


// Top Search Bar and Title
function topBar() {
    const title = document.createElement('div');
    title.setAttribute('id', 'title');

    const search = document.createElement('div');
    search.setAttribute('id','searchContainer');

    title.innerHTML = '<i class="fa-solid fa-globe"></i> Tenki Yohou';
    search.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> <input type="text" id="userInput" name="userInput" minlength="4" maxlength="40">'

    topSearch.appendChild(title);
    topSearch.appendChild(search);

    return topSearch;
}

// Takes in data and shows prefered unit.
function currentWeather(response) {

    console.log(response);

    main.innerHTML = '';

    const cityName = document.createElement('div');
    cityName.setAttribute('id','cityName');

    const bot = document.createElement('div');
    bot.setAttribute('id','bot');

    const highLow = document.createElement('div');
    highLow.setAttribute('id', 'highLow');

    const botLeft = document.createElement('div');
    botLeft.setAttribute('id', 'botLeft');

    const botRight = document.createElement('div');
    botRight.setAttribute('id', 'botRight');

    const currentWeatherIcon = document.createElement('div');
    currentWeatherIcon.setAttribute('id', 'currentWeatherIcon');

    const currentWeatherInfo = document.createElement('div');
    currentWeatherInfo.setAttribute('id','currentWeatherInfo');

    const temp = document.createElement('p');
    temp.setAttribute('id','temp');

    const wind = document.createElement('p');
    wind.setAttribute('id','airPol');

    const highTemp = document.createElement('p');
    temp.setAttribute('id','highTemp');

    const lowTemp = document.createElement('p');
    temp.setAttribute('id','lowTemp');

    const feelsLike = document.createElement('p');
    feelsLike.setAttribute('id','feelsLike');

    const humidty = document.createElement('p');
    humidty.setAttribute('id','humidty');

    cityName.innerHTML = response.name + ", " + response.sys.country;
    highTemp.innerHTML = 'H: '+ Math.round(response.main.temp_max) + '33&#8451;';
    lowTemp.innerHTML = 'L: ' + Math.round(response.main.temp_min) +'22&#8451;';
    temp.innerHTML = Math.round(response.main.temp) + '&#8451;';
    humidty.innerHTML = 'Humidty: '+ response.main.humidity + '%' ;
    wind.innerHTML = 'Wind: ' + Math.round(response.wind.speed * 10) /10 + ' ' + response.wind.deg;
    currentWeatherIcon.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>'
    currentWeatherInfo.innerHTML = response.weather[0].main;

    highLow.appendChild(highTemp);
    highLow.appendChild(lowTemp);

    botLeft.appendChild(currentWeatherIcon);
    botLeft.appendChild(highLow);

    botRight.appendChild(currentWeatherInfo);
    botRight.appendChild(temp);
    botRight.appendChild(humidty);
    botRight.appendChild(wind);

    bot.appendChild(botLeft);
    bot.appendChild(botRight);

    main.appendChild(cityName);
    main.appendChild(bot);
    
    return main;
}

// Takes in data and prefered unit.
function futureForecast(response) {

    forecast.innerHTML = '';

    const topF = document.createElement('div');
    topF.setAttribute('id', 'topF');

    const botF = document.createElement('div');
    botF.setAttribute('id', 'botF');

    const day1 = document.createElement('div');
    day1.classList.add("fiveDay");

    const day2 = document.createElement('div');
    day2.classList.add("fiveDay");
    
    const day3 = document.createElement('div');
    day3.classList.add("fiveDay");
    
    const day4 = document.createElement('div');
    day4.classList.add("fiveDay");

    const day5 = document.createElement('div');
    day5.classList.add("fiveDay");

    day1.appendChild(topF);
    day1.appendChild(botF);
    day2.appendChild(topF);
    day2.appendChild(botF);    
    day3.appendChild(topF);
    day3.appendChild(botF);
    day4.appendChild(topF);
    day4.appendChild(botF);
    day5.appendChild(topF);
    day5.appendChild(botF);

    forecast.appendChild(day1);
    forecast.appendChild(day2);
    forecast.appendChild(day3);
    forecast.appendChild(day4);
    forecast.appendChild(day5);

    return forecast;
}

// Creates Footer HTML
function foot() {
    footer.innerHTML = '<p>Made by Kevin Drake for The Odin Project <a href="https://github.com/kdrake1992"><i class="fa-brands fa-github"></i></a><p>'
    return footer;
}


function displayInfo(data) {
    body.appendChild(topBar());    
    body.appendChild(currentWeather()); 
    body.appendChild(futureForecast()); 
    body.appendChild(foot()); 
}