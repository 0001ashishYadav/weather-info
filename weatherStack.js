const weatherCardConEl = document.getElementById("weatherCard");
const cityNameEl = document.getElementById("cityName");
const goBtnEl = document.getElementById("goBtn");
goBtnEl.disabled = true;

const timeDateConEl = document.getElementById("timeDateCon");
const dateTimeEl = document.getElementById("date&time");

const middleSecEl = document.getElementById("middle-sec");
const wImgEl = document.getElementById("wImg");
const tempEl = document.getElementById("temperature");
const cityEl = document.getElementById("city");
const regionEl = document.getElementById("region");
const countryEl = document.getElementById("country");

const lowerSecEl = document.getElementById("lowerMainCon");
const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("windSpeed");

// const imgs = [
//   "./assets/🦆 icon _sun 1_.png",
//   "./assets/moon.png",
//   "./assets/cloud.png",
// ];

let cityName = "new delhi";

const options = {
  method: "GET",
};

const weatherData = async () => {
  const url = `https://api.weatherstack.com/current?access_key=0881298882991c786e321cf2d093e386&query=${cityName}`;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    const x = result.current.weather_descriptions;
    console.log(x);

    if (result.current.weather_descriptions === "Sunny") {
      wImgEl.src = "./assets/cloud.png";
    } else if (result.current.weather_descriptions === "Mist") {
      wImgEl.src = "./assets/moon.png";
    } else {
      wImgEl.src = "./assets/🦆 icon _sun 1_.png";
    }

    tempEl.innerText = `${result.current.temperature} °C`;

    cityEl.innerText = `${result.location.name} ,`;

    regionEl.innerText = ` ${result.location.region} ,`;

    countryEl.innerText = result.location.country;

    dateTimeEl.innerText = result.location.localtime;

    humidityEl.innerText = `${result.current.humidity} %`;

    windSpeedEl.innerText = ` ${result.current.wind_speed} kph`;

    // const weatherIconEl = document.createElement("img");
    // weatherIconEl.src = result.current.weather_icons;
    // weatherIconEl.style.marginLeft = "100px";
    // document.body.appendChild(weatherIconEl);

    console.log(result.current.weather_icons);
  } catch (error) {
    console.error(error);
  }

  timeDateConEl.classList.remove("hidden");
  middleSecEl.classList.remove("hidden");
  lowerSecEl.classList.remove("hidden");
};

cityNameEl.addEventListener("change", () => {
  // cityName = cityNameEl.value;
  // weatherData();
  goBtnEl.disabled = false;
});

goBtnEl.addEventListener("click", () => {
  cityName = cityNameEl.value;
  weatherData();
  goBtnEl.disabled = true;
});

weatherData();
