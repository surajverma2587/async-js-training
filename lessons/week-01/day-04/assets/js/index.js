const CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

const FORECAST_WEATHER_URL = "https://api.openweathermap.org/data/2.5/onecall";

const API_KEY = "8109f605d79877f7488a194794a29013";

const ICON_URL = "http://openweathermap.org/img/w/03n.png";

const searchForm = document.getElementById("search-form");

const handleOnSubmit = (event) => {
  event.preventDefault();

  const searchInputElement = document.getElementById("search-input");

  const cityName = searchInputElement.value;

  if (!cityName) {
    handleError();
  } else {
    renderWeatherInformation(cityName);
  }
};

const renderWeatherInformation = async (cityName) => {
  // get current weather info
  const currentWeatherInformation = await getCurrentWeatherInfo(cityName);

  console.log(currentWeatherInformation);

  // get lat lon from current weather data
  const { lat, lon } = currentWeatherInformation.coord;

  // get forecast weather info
  const forecastWeatherInformation = await getForecastWeatherInfo(lat, lon);

  console.log(forecastWeatherInformation);

  // add city name to local storage
  addCityToLocalStorage(cityName);

  // render current weather info
  renderCurrentWeather(currentWeatherInformation);

  // render forecast weather info
  renderForecastWeather(forecastWeatherInformation);
};

const getCurrentWeatherInfo = async (cityName) => {
  try {
    const url = `${CURRENT_WEATHER_URL}?q=${cityName}&appid=${API_KEY}`;

    const response = await fetch(url);

    if (response.status !== 200) {
      handleApiError();
    } else {
      const data = await response.json();
      return data;
    }
  } catch {
    handleApiError();
  }
};

const getForecastWeatherInfo = async (lat, lon) => {
  try {
    const url = `${FORECAST_WEATHER_URL}?lat=${lat}&lon=${lon}&exclude=[current,minutely,hourly,alerts]&appid=${API_KEY}`;

    const response = await fetch(url);

    if (response.status !== 200) {
      handleApiError();
    } else {
      const data = await response.json();
      return data;
    }
  } catch {
    handleApiError();
  }
};

const addCityToLocalStorage = (cityName) => {
  // get cities from LS
  const cities = JSON.parse(localStorage.getItem("cities")) || [];

  if (!cities.includes(cityName.toLowerCase())) {
    // add city to cities
    cities.push(cityName.toLowerCase());
  }

  // set cities to LS
  localStorage.setItem("cities", JSON.stringify(cities));
};

const renderCurrentWeather = () => {};

const renderForecastWeather = () => {};

const handleError = () => {};

const handleApiError = () => {};

searchForm.addEventListener("submit", handleOnSubmit);
