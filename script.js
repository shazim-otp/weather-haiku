const cityEl = document.getElementById("city");
const weatherEl = document.getElementById("weather");
const tempEl = document.getElementById("temp");
const haikuEl = document.getElementById("haiku");
const button = document.getElementById("newHaiku");

let currentWeather = "default";

const haikus = {

  Clear: [
`Golden sunlight glows
Warm breeze dances through the trees
Morning smiles awake`,

`Blue skies stretch so wide
Birds glide softly through the air
Peace rests on the earth`
  ],

  Rain: [
`Raindrops kiss the streets
Clouds whisper forgotten songs
Lonely windows glow`,

`Grey skies softly cry
Silent puddles hold the moon
Night hums quietly`
  ],

  Clouds: [
`Clouds drift slowly past
Dreams float over sleeping hills
Stillness fills the air`,

`Muted silver skies
Wind carries a distant tune
Day fades into mist`
  ],

  Snow: [
`Snow blankets the ground
Footsteps vanish into white
Winter holds its breath`,

`Frozen morning light
Trees wear coats of crystal frost
Silence gently falls`
  ],

  Default: [
`The wind softly calls
Moments drift like falling leaves
Time fades into dusk`
  ]
};

async function getWeather() {

  try {

    const position = await new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // FREE API
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    const response = await fetch(url);
    const data = await response.json();

    const temp = data.current_weather.temperature;
    const weatherCode = data.current_weather.weathercode;

    let weatherType = "Default";
    let bodyClass = "default";
    let weatherText = "Unknown";

    if(weatherCode === 0){
      weatherType = "Clear";
      bodyClass = "sunny";
      weatherText = "Sunny";
    }

    else if([1,2,3].includes(weatherCode)){
      weatherType = "Clouds";
      bodyClass = "cloudy";
      weatherText = "Cloudy";
    }

    else if([61,63,65,80,81,82].includes(weatherCode)){
      weatherType = "Rain";
      bodyClass = "rainy";
      weatherText = "Rainy";
    }

    else if([71,73,75].includes(weatherCode)){
      weatherType = "Snow";
      bodyClass = "snowy";
      weatherText = "Snowy";
    }

    currentWeather = weatherType;

    document.body.className = bodyClass;

    cityEl.textContent = "Your Location";
    weatherEl.textContent = weatherText;
    tempEl.textContent = `${temp}°C`;

    generateHaiku();

  } catch (error) {

    cityEl.textContent = "Location Access Denied";
    weatherEl.textContent = "Using default haiku";

    generateHaiku();
  }
}

function generateHaiku(){

  const selected = haikus[currentWeather] || haikus["Default"];

  const random =
    selected[Math.floor(Math.random() * selected.length)];

  haikuEl.textContent = random;
}

button.addEventListener("click", generateHaiku);

getWeather();