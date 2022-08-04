const FETCH_WEATHER_DATA_BEGIN = 'FETCH_WEATHER_DATA_BEGIN';
const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
const FETCH_WEATHER_DATA_ERROR = 'FETCH_WEATHER_DATA_BEGIN_ERROR';
const FETCH_NEXT_FIVE_DAYS = 'FETCH_NEXT_FIVE_DAYS';
const FETCH_BY_CITY_NAME = 'FETCH_BY_CITY_NAME';

// initial state
const store = {
  weatherData: [],
  nextFiveDaysData: [],
  loading: false,
  error: null,
};

// reducers
const weatherReducers = (state = store, action) => {
  switch (action.type) {
    case FETCH_WEATHER_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        weatherData: action.payload.weatherObj,
        loading: false,
      };
    case FETCH_WEATHER_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case FETCH_NEXT_FIVE_DAYS:
      return {
        ...state,
        nextFiveDaysData: action.payload.fiveDaysData,
        loading: false,
      };
    case FETCH_BY_CITY_NAME:
      return {
        ...state,
        weatherData: action.payload.cityWeatherObj,
      };
    default:
      return state;
  }
};

// action creators
export const fetchDataBegin = () => ({
  type: FETCH_WEATHER_DATA_BEGIN,
});

export const fetchDataSuccess = (weatherObj) => ({
  type: FETCH_WEATHER_DATA_SUCCESS,
  payload: { weatherObj },
});

export const fetchDataError = (error) => ({
  type: FETCH_WEATHER_DATA_ERROR,
  payload: error,
});

export const fetchNextFiveDays = (fiveDaysData) => ({
  type: FETCH_NEXT_FIVE_DAYS,
  payload: { fiveDaysData },
});

export const fetchByCityName = (cityWeatherObj) => ({
  type: FETCH_BY_CITY_NAME,
  payload: { cityWeatherObj },
});

export default weatherReducers;
