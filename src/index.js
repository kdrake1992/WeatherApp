// Imports CSS
import './style.css';

// Imports FontAwesome
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';

// Imports Fetch Functions
import {fetchCurrentWeather} from './fetch';

// Sorts data received by fetch
import {displayInfo, updateDisplay} from './display';

function start() {
    fetchCurrentWeather('Tokyo', 'metric').then(function(response) {
        displayInfo(response, "Metric");
        searchBar();
        toggle();
    });
}

start();

// Search bar function
function searchBar() {
    const search = document.getElementById("userInput");
    search.addEventListener('keypress', e => {
    if(e.key === 'Enter') {
        fetchCurrentWeather(search.value, 'Metric').then(function(response) {
            if(response.cod === 200) {
                updateDisplay(response, "Metric");
            }
            else {
                alert('City not found.')
            }
        })
    }
})};

// Toggle between units
function toggle() {
    document.getElementById("toggle").addEventListener('click', e=> {
        if(e.target.innerHTML === "Metric") {
            e.target.innerHTML = 'Imperial'
            fetchCurrentWeather(document.getElementById('cityName').innerHTML, 'Imperial').then(function(response) {
                updateDisplay(response, 'Imperial');
            });
        }
        else {
            e.target.innerHTML = 'Metric'
            fetchCurrentWeather(document.getElementById('cityName').innerHTML, 'Metric').then(function(response) {
                updateDisplay(response, 'Metric');
            });
        }
    })
}