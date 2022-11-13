import { getWeatherData } from "./dataOperations/getData";
import moment from "moment-timezone";

export function viewPage() {
  const city = document.querySelector(".city");
  const flag = document.querySelector(".flag-img");
  const temp = document.querySelector(".temp");
  const hour = document.querySelector(".hour");
  const hum = document.querySelector(".hum");
  const press = document.querySelector(".press");
  const clouds = document.querySelector(".clouds");

  const info = document.querySelector(".info");

  (function startSetUp() {
    animation();
    getObj();
  })();

  function getObj() {
    getWeatherData().then((response) => {
      getNeedData(response);
    });
  }

  function getNeedData(response) {
    const obj = {
      flag: response.flag.url,
      city: response.data.name,
      time: response.newestMongo.data[0].createdAt,
      temp: response.newestMongo.data[0].temp,
      hum: response.newestMongo.data[0].hum,
      pressure: response.newestMongo.data[0].pres,
      clouds: response.newestMongo.data[0].clo,
    };
    processData(obj);
  }

  function processData(result) {
    const time = new Date(result.time);
    const lastTime = moment(time).format("DD/MM/YYYY, h:mm A");

    const tempCStr = `${result.temp} \xB0C`;

    const hum = `${result.hum} %`;

    const pressure = `${result.pressure} hPa`;

    const clouds = `${result.clouds} %`;

    const weatherInfo = {
      flag: result.flag,
      city: result.city,
      date: {
        lastTime,
      },
      temp: tempCStr,
      hum,
      pressure,
      clouds,
    };

    showWeather(weatherInfo);
  }

  function showWeather(obj) {
    city.textContent = obj.city + ", ";
    flag.src = obj.flag;
    hour.textContent = obj.date.lastTime;
    temp.textContent = obj.temp;
    hum.textContent = obj.hum;
    press.textContent = obj.pressure;
    clouds.textContent = obj.clouds;
  }

  function animation() {
    if (info.classList.contains("face-in")) {
      info.classList.remove("face-in");
      info.offsetWidth;
      info.classList.add("face-in");
    } else {
      info.classList.add("face-in");
    }
  }
}
