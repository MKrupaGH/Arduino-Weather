export async function getWeatherData() {
  try {
    const dataMongo = await fetch(
      "https://express-weatherstation-production.up.railway.app/catalog/values/newest",
      { mode: "cors" }
    );
    const hoursValue = await fetch(
      "https://express-weatherstation-production.up.railway.app/catalog/values/avg",
      { mode: "cors" }
    );

    const newestMongo = await dataMongo.json();
    const hoursVal = await hoursValue.json();

    return {
      status: "success",
      message: "",
      newestMongo,
      hoursVal,
    };
  } catch (error) {
    return {
      status: "failed",
      message: "Error on fetching",
    };
  }
}
