import axios from "axios";

export const getLocation = (setLocation) => {
  navigator.geolocation.getCurrentPosition((position) => {
    setLocation(position.coords);
  });
};

export const getWeather = async (lat, lon, key, setWeather) => {
  const { data } = await axios.get(
    `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`
  );
  console.log(data);
  setWeather({
    temp: data.main.temp.toFixed(0) + "°",
    weather: data.weather[0].main,
    icon: data.weather[0].icon,
  });
};
