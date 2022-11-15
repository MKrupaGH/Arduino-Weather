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

  const charWindow = document.querySelector(".chart-window");
  const arrow = document.querySelector(".arrow-btn");

  const pmWindow = document.querySelector(".pm-window");
  const circle = document.querySelector(".circle-btn");

  const pm = document.querySelector(".pm");

  arrow.addEventListener("click", showWindow);
  function showWindow() {
    charWindow.classList.toggle("show");
    charWindow.classList.toggle("hide");
    arrow.classList.toggle("left");
    arrow.classList.toggle("right");
    for (let i = 0; i < arrow.children.length; i++) {
      let child = arrow.children[i];
      child.classList.toggle("to-arrow");
    }
  }

  circle.addEventListener("click", showPMWindow);
  function showPMWindow() {
    pmWindow.classList.toggle("show");
    pmWindow.classList.toggle("hide");
    circle.classList.toggle("left");
    circle.classList.toggle("right");
  }

  function showPM(pms) {
    for (let i = 0; i < pm.children.length; i++) {
      let child = pm.children[i];
      if (child.classList.contains("pm1")) {
        //child.style.width = pms.pm1 * 5 + "px";
        //child.style.height = pms.pm1 * 5 + "px";
        child.style.backgroundImage =
          "radial-gradient(transparent, lightgreen, lightgreen)";
      } else if (child.classList.contains("pm25")) {
        //child.style.width = pms.pm25 * 5 + "px";
        //child.style.height = pms.pm25 * 5 + "px";

        if (pms.pm25 <= 20) {
          child.style.backgroundImage =
            "radial-gradient(transparent, lightgreen, lightgreen)";
        }
        if (pms.pm25 > 20 && pms.pm25 < 25) {
          child.style.backgroundImage =
            "radial-gradient(transparent, yellow, yellow)";
        }
        if (pms.pm25 >= 25) {
          child.style.backgroundImage =
            "radial-gradient(transparent, red, red)";
        }
      } else if (child.classList.contains("pm10")) {
        //child.style.width = pms.pm10 * 5 + "px";
        //child.style.height = pms.pm10 * 5 + "px";

        if (pms.pm25 <= 40) {
          child.style.backgroundImage =
            "radial-gradient(transparent, lightgreen, lightgreen)";
        }
        if (pms.pm25 > 40 && pms.pm25 < 50) {
          child.style.backgroundImage =
            "radial-gradient(transparent, yellow, yellow)";
        }
        if (pms.pm25 >= 50) {
          child.style.backgroundImage =
            "radial-gradient(transparent, red, red)";
        }
      }
    }
  }

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
      pm1: response.newestMongo.data[0].pm1,
      pm25: response.newestMongo.data[0].pm25,
      pm10: response.newestMongo.data[0].pm10,
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
      pm: {
        pm1: result.pm1,
        pm25: result.pm25,
        pm10: result.pm10,
      },
    };

    showWeather(weatherInfo);
    showPM(weatherInfo.pm);
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
