import moment from "moment-timezone";
import { operationOnData } from "./operations";

export const processData = (async () => {
  const getValues = await operationOnData().then((response) => {
    return response;
  });

  const objToProcess = getValues();
  console.log(objToProcess);
  const processMainData = () => {
    const time = new Date(objToProcess.time);
    const lastTime = moment(time).format("DD/MM/YYYY, h:mm A");
    const tempCStr = `${result.temp} \xB0C`;
    const hum = `${result.hum} %`;
    const pressure = `${result.pressure} hPa`;
    const clouds = `${result.clouds} %`;

    return {
      flag: objToProcess.flag,
      city: objToProcess.city,
      date: lastTime,
      temp: tempCStr,
      hum,
      pressure,
      clouds,
    };
  };

  const processPMData = () => {
    return {
      pm1: objToProcess.pm1,
      pm25: objToProcess.pm25,
      pm10: objToProcess.pm10,
    };
  };

  const processCharData = () => {
    const charValues = objToProcess.char.data;

    let time = new Date().getHours();
    let arr = [];

    for (let i = 24; i >= 1; i--) {
      arr.unshift(time);
      if (time === 0) {
        time = 24;
      }
      time -= 1;
      console.log(arr);
    }

    charValues.map((obj) => {
      console.log(obj._id);
      if (obj._id === 23) {
        obj._id = 0;
        return;
      }
      obj._id += 1;
    });

    console.log(charValues);
  };

  processCharData();

  const getCharData = () => {
    return processCharData;
  };

  const getMainData = () => {
    return processMainData;
  };

  const getPMData = () => {
    return processPMData;
  };

  return {
    getCharData,
    getMainData,
    getPMData,
  };
})();
