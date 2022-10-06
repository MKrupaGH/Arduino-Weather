export async function getWeatherData(city) {
  let htmlRequest;
  if (city === "") {
    htmlRequest = `https://api.openweathermap.org/data/2.5/weather?q=Krakow&units=metric&APPID=a90a094d8ba09340beba0e7fd95a30fa`;
  } else {
    htmlRequest = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=a90a094d8ba09340beba0e7fd95a30fa`;
  }
  try {
    const dataJSON = await fetch(htmlRequest, { mode: "cors" });

    const data = await dataJSON.json();

    const flag = await fetch(
      `https://countryflagsapi.com/png/${data.sys.country}`,
      { mode: "cors" }
    );
    return { status: "success", message: "", data, flag };
  } catch (error) {
    return {
      status: "failed",
      message: "No matching location found",
      data: null,
      flag: null,
    };
  }
}
