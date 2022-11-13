export async function getWeatherData() {
  let htmlRequest = `https://api.openweathermap.org/data/2.5/weather?q=Krakow&units=metric&APPID=a90a094d8ba09340beba0e7fd95a30fa`;

  try {
    const dataJSON = await fetch(htmlRequest, { mode: "cors" });
    const dataMongo = await fetch(
      "https://shocking-coffin-88092.herokuapp.com/catalog/values/newest",
      { mode: "cors" }
    );

    const data = await dataJSON.json();

    const newestMongo = await dataMongo.json();
    const flag = await fetch(
      `https://countryflagsapi.com/png/${data.sys.country}`,
      { mode: "cors" }
    );
    return { status: "success", message: "", data, flag, newestMongo };
  } catch (error) {
    return {
      status: "failed",
      message: "Error on fetching",
    };
  }
}
