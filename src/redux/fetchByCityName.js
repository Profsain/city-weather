import { fetchByCityName } from './weatherreducers';

const fetchByCity = (city) => {
  const API_KEY = '53d42d9bf65c6578b579fb53c78b3712';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  return (dispatch) => fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dispatch(fetchByCityName(data));
      return data;
    })
    .catch((error) => error);
};

export default fetchByCity;
