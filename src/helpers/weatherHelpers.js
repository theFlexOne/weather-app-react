export const extractWeatherData = (data) => ({
  weather: data.weather[0],
  main: data.main,
  wind: data.wind,
  dt: data.dt,
  visibility: data.visibility,
});
