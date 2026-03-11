const btn = document.getElementById("btn");

btn.addEventListener("click", getWeather);


function weatherEmoji(code){

if(code === 0) return "☀️ Clear";
if(code <= 3) return "⛅ Partly Cloudy";
if(code <= 48) return "☁️ Cloudy";
if(code <= 67) return "🌧 Rain";
if(code <= 77) return "❄️ Snow";
if(code <= 99) return "⛈ Storm";

return "🌡 Weather";
}


function showLoading(){

document.getElementById("delhi").innerHTML = `<div class="spinner"></div>`;
document.getElementById("mumbai").innerHTML = `<div class="spinner"></div>`;
document.getElementById("bangalore").innerHTML = `<div class="spinner"></div>`;

}


function showError(){

document.getElementById("delhi").innerHTML = `<p class="error">Error loading</p>`;
document.getElementById("mumbai").innerHTML = `<p class="error">Error loading</p>`;
document.getElementById("bangalore").innerHTML = `<p class="error">Error loading</p>`;

}


function getWeather(){

showLoading();

const delhi = fetch(
"https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true"
);

const mumbai = fetch(
"https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&current_weather=true"
);

const bangalore = fetch(
"https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true"
);


Promise.all([delhi,mumbai,bangalore])

.then(responses => Promise.all(responses.map(r => r.json())))

.then(data => {

const [delhiData,mumbaiData,bangaloreData] = data;


document.getElementById("delhi").innerHTML =
`
<h3>Delhi</h3>
<div class="temp">${delhiData.current_weather.temperature}°C</div>
<p>${weatherEmoji(delhiData.current_weather.weathercode)}</p>
`;


document.getElementById("mumbai").innerHTML =
`
<h3>Mumbai</h3>
<div class="temp">${mumbaiData.current_weather.temperature}°C</div>
<p>${weatherEmoji(mumbaiData.current_weather.weathercode)}</p>
`;


document.getElementById("bangalore").innerHTML =
`
<h3>Bangalore</h3>
<div class="temp">${bangaloreData.current_weather.temperature}°C</div>
<p>${weatherEmoji(bangaloreData.current_weather.weathercode)}</p>
`;

})

.catch(err => {

console.log(err);
showError();

});

}