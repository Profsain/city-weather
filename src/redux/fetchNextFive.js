import { fetchNextFiveDays } from "./weatherreducers";

const fetchNextFiveApi = (city) => {
  const API_KEY = '53d42d9bf65c6578b579fb53c78b3712';
  const days = 5;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${days}&units=metric&appid=${API_KEY}`;

  return (dispatch) => {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchNextFiveDays(data));
        return data;
      })
      .catch((error) => error);
  };
};

export default fetchNextFiveApi;
