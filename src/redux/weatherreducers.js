const FETCH_WEATHER_DATA_BEGIN = 'FETCH_WEATHER_DATA_BEGIN';
const FETCH_WEATHER_DATA_SUCCESS = 'FETCH_WEATHER_DATA_SUCCESS';
const FETCH_WEATHER_DATA_ERROR = 'FETCH_WEATHER_DATA_BEGIN_ERROR';

// initial state
const store = {
  weatherData: [],
  loading: false,
  error: null,
}

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
      }
    default:
      return state;
  };
}

// action creators
export const fetchDataBegin = () => ({
  type: FETCH_WEATHER_DATA_BEGIN,
});

export const fetchDataSuccess = (weatherObj) => ({
  type: FETCH_WEATHER_DATA_SUCCESS,
  payload: {weatherObj},
});

export const fetchDataError = (error) => ({
  type: FETCH_WEATHER_DATA_ERROR,
  payload: error,
});

export default weatherReducers;
