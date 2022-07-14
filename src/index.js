// Imports CSS
import './style.css';

// Imports FontAwesome
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';

// Imports Fetch Functions
import {fetchMeByZip, fetchWeather, fetchCurrentWeather, fetchForecast} from './fetch';

// Sorts data received by fetch
import {currentWeather, futureForecast, displayInfo} from './display';

function start() {
    fetchCurrentWeather('Tokyo', 'metric').then(function(response) {
        currentWeather(response);
        displayInfo();
    });

}

function searchBar() {
    const search = document.getElementById("userInput");
    search.addEventListener('keypress', e => {
    if(e.key === 'Enter') {
        fetchCurrentWeather(search.value, "metric").then(function(response) {
            if(response.cod === 200) {
                currentWeather(response);
            }
            else{
                console.log('City not found.')
            }
        });
        
        fetchForecast(search.value, "metric").then(function(response) {
            if(response.cod === 200) {
                futureForecast(response);
            }
            else{
                console.log('City not found.')
            }
        })
    }
})};

start();
// searchBar();