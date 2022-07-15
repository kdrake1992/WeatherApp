export {displayInfo};

// DOM for the body
const body = document.body;

const topSearch = document.createElement('div');
topSearch.classList.add("topSearch");

const main = document.createElement('div');
main.classList.add("currentWeather");

const footer = document.createElement('div');
footer.classList.add("footer");

// Wind Direction
function windDirection(direction) {
    if(direction < 30 || (direction >= 330 && direction <= 360)) {
        return 'N';
    }
    else if(direction >= 30 && direction <= 60) {
        return 'NE';
    }
    else if(direction > 60 && direction<= 120) {
        return 'E';
    }
    else if(direction > 120 && direction <= 150) {
        return 'SE';
    }
    else if(direction > 150 && direction <= 210) {
        return 'S';
    }
    else if(direction > 210 && direction <= 225) {
        return 'SW';
    }
    else if(direction > 225 && direction <= 300) {
        return 'W';
    }
    else if(direction > 300 && direction <= 330) {
        return 'NW';
    }
}

// Chooses weather icon
function setIcon(weather) {
    let icon = '';
    switch(weather) {
        case 'Clear': 
            icon = '<i class="fa-solid fa-sun"></i>'
            break;
        case 'Clouds':
            icon = '<i class="fa-solid fa-cloud"></i>';
            break;
        case 'Rain':
            icon = '<i class="fa-solid fa-cloud-rain"></i>'
            break;
        case 'Drizzle':
            icon = '<i class="fa-solid fa-cloud-showers-heavy"></i>';
            break;
        case 'Thunderstorm':
            icon = '<i class="fa-solid fa-cloud-bolt"></i>';
            break;
        case 'Snow':
            icon = '<i class="fa-solid fa-snowflake"></i>';
            break;
        case 'Mist':
        case 'Smoke':
        case 'Haze':
        case 'Dust':
        case 'Fog':
        case 'Sand':
        case 'Dust':
        case 'Ash':
        case 'Squall':
        case 'Tornado':
            icon = '<i class="fa-solid fa-wind"></i>';
            break;
    }
    return icon;
}



// Top Search Bar and Title
function topBar() {
    const toggle = document.createElement('div');
    toggle.setAttribute('id', 'toggle');

    const title = document.createElement('div');
    title.setAttribute('id', 'title');

    const search = document.createElement('div');
    search.setAttribute('id','searchContainer');

    toggle.innerHTML = 'Metric';
    title.innerHTML = '<i class="fa-solid fa-globe"></i> Tenki Yohou';
    search.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> <input type="text" id="userInput" name="userInput" minlength="4" maxlength="40">'

    topSearch.appendChild(toggle);
    topSearch.appendChild(title);
    topSearch.appendChild(search);

    return topSearch;
}

// Takes in data and shows prefered unit.
function currentWeather(response, unit) {
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

    let tempMeasurement = '';
    let speedMeasurement = '';

    if(unit === 'Metric') {
        tempMeasurement = '&#8451;';
        speedMeasurement = 'km';
    }
    else if(unit === 'Imperial') {
        tempMeasurement = '&#8457;';
        speedMeasurement = 'mph';
    }

    cityName.innerHTML = response.name + ", " + response.sys.country;
    highTemp.innerHTML = 'H: '+ Math.round(response.main.temp_max) + tempMeasurement;
    lowTemp.innerHTML = 'L: ' + Math.round(response.main.temp_min) + tempMeasurement;
    temp.innerHTML = Math.round(response.main.temp) + tempMeasurement;
    humidty.innerHTML = 'Humidty: '+ response.main.humidity + '%' ;
    wind.innerHTML = 'Wind: ' + Math.round(response.wind.speed * 10) /10 + speedMeasurement + ' ' + windDirection(response.wind.deg);
    currentWeatherIcon.innerHTML = setIcon(response.weather[0].main)
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

// Creates Footer HTML
function foot() {
    footer.innerHTML = '<p>Made by Kevin Drake for The Odin Project <a href="https://github.com/kdrake1992"><i class="fa-brands fa-github"></i></a><p>'
    return footer;
}


function displayInfo(data, unit) {
    topSearch.innerHTML = '';
    main.innerHTML = '';
    footer.innerHTML = '';

    body.appendChild(topBar());    
    body.appendChild(currentWeather(data, unit));  
    body.appendChild(foot()); 
}