export async function getWeatherData(city) {
  let htmlRequest;
  if (city === "") {
    htmlRequest = `https://api.openweathermap.org/data/2.5/weather?q=Krakow&units=metric&APPID=a90a094d8ba09340beba0e7fd95a30fa`;
  } else {
    htmlRequest = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=a90a094d8ba09340beba0e7fd95a30fa`;
  }
  try {
    const dataJSON = await fetch(htmlRequest);

    const data = await dataJSON.json();

    const flag = await fetch(
      `https://countryflagsapi.com/png/${data.sys.country}`
    );

    return {
      flag: flag.url,
      city: data.name,
      timezone: data.timezone,
      temp: data.main.temp,
      weatherType: data.weather[0].description,
      fellTemp: data.main["feels_like"],
      hum: data.main.humidity,
      pressure: data.main.pressure,
      wind: data.wind.speed,
      clouds: data.clouds.all,
    };
  } catch (error) {
    console.log(error);
  }
}
