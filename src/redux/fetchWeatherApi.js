import {
  fetchDataBegin,
  fetchDataSuccess,
  fetchDataError,
} from "./weatherreducers";

const fetchWeatherApi = (lat, long) => {
  const API_KEY = '53d42d9bf65c6578b579fb53c78b3712';
  const url = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`;

  return (dispatch) => {
    dispatch(fetchDataBegin());
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchDataSuccess(data));
        return data;
      })
      .catch((error) => dispatch(fetchDataError(error)));
  };
};

export default fetchWeatherApi;