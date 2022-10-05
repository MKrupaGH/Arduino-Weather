import { getWeatherData } from "./dataOperations/getData";
//import { format, formatDistance, formatRelative, subDays } from "date-fns";
import moment from "moment-timezone";
export function viewPage() {
  const typeW = document.querySelector(".type");
  const city = document.querySelector(".city");
  const flag = document.querySelector(".flag-img");
  const temp = document.querySelector(".temp");
  const hour = document.querySelector(".hour");
  const tempF = document.querySelector(".tempF");
  const hum = document.querySelector(".hum");
  const press = document.querySelector(".press");
  const wind = document.querySelector(".wind");
  const clouds = document.querySelector(".clouds");
  const btn = document.querySelector("button");
  const inputValue = document.querySelector("#city");

  getObj();
  (function addListener() {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      getObj();
    });
  })();

  function getObj() {
    getWeatherData(inputValue.value).then((result) => {
      processData(result);
    });
  }

  function processData(result) {
    const timezone = result.timezone;
    const timezoneMin = timezone / 60;
    const timeView = moment()
      .utcOffset(timezoneMin)
      .format("DD/MM/YYYY, h:mm A");
    const tempC = Math.round(result.temp, 3);
    const tempCFell = Math.round(result.fellTemp, 3);

    const tempF = (tempC * 9) / 5 + 32;
    const tempFFell = (tempCFell * 9) / 5 + 32;

    const tempCStr = `${tempC} \xB0C`;
    const tempCFellStr = `${tempCFell} \xB0C`;

    const tempFStr = `${tempF} \xB0F`;
    const tempFFellStr = `${tempFFell} \xB0C`;

    const hum = `${result.hum} %`;

    const pressure = `${result.pressure} hPa`;

    const wind = `${result.wind} m/s`;

    const clouds = `${result.clouds} %`;

    const weatherInfo = {
      flag: result.flag,
      city: result.city,
      weather: result.weatherType,
      date: {
        timeView,
      },
      temp: {
        tempCStr,
        tempFStr,
        tempCFellStr,
        tempFFellStr,
      },
      hum,
      pressure,
      wind,
      clouds,
    };

    showWeather(weatherInfo);
  }

  function showWeather(obj) {
    typeW.textContent = obj.weather;
    city.textContent = obj.city + ", ";
    flag.src = obj.flag;
    hour.textContent = obj.date.timeView;
    temp.textContent = obj.temp.tempCStr;
    tempF.textContent = obj.temp.tempCFellStr;
    hum.textContent = obj.hum;
    press.textContent = obj.pressure;
    wind.textContent = obj.wind;
    clouds.textContent = obj.clouds;
  }
}
