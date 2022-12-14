import { getWeatherData } from "./getData";

export const operationOnData = async () => {
  const weatherData = await getWeatherData().then((response) => {
    return response;
  });

  const obj = {
    flag: weatherData.flag.url,
    city: weatherData.data.name,
    time: weatherData.newestMongo.data[0].createdAt,
    temp: weatherData.newestMongo.data[0].temp,
    hum: weatherData.newestMongo.data[0].hum,
    pressure: weatherData.newestMongo.data[0].pres,
    clouds: weatherData.newestMongo.data[0].clo,
    pm1: weatherData.newestMongo.data[0].pm1,
    pm25: weatherData.newestMongo.data[0].pm25,
    pm10: weatherData.newestMongo.data[0].pm10,
    char: weatherData.hoursVal,
  };

  const getObject = () => {
    return obj;
  };

  return getObject;
};
