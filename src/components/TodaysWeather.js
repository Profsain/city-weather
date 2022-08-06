import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import fetchByCity from '../redux/fetchByCityName';
import fetchNextFiveApi from '../redux/fetchNextFive';
import setWeatherIcon from '../helper/setWeatherIcons';
import '../styles/TodaysWeather.css';

const TodaysWeather = () => {
  const weatherData = useSelector((state) => state.weather.weatherData);
  const dispatch = useDispatch();
  const weatherCondition = weatherData?.weather?.[0]?.main || 'Internet Connect Error!';
  const currentTemp = weatherData?.main?.temp || '0';
  const currentCity = weatherData?.name || 'City';
  const count = weatherData?.sys?.country || 'N';
  const date = moment().format('dddd Do MMMM YYYY');
  const weatherIcon = setWeatherIcon(weatherCondition);
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchByCity(city));
    dispatch(fetchNextFiveApi(city));
    setCity('');
  };

  const backToHome = () => {
    navigate('/');
  };

  return (
    <Grid
      className="Container"
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={2} className="Top">
        <div className="Search-div">
          <TextField
            id="filled-basic"
            label="Seach for places"
            variant="filled"
            className="Search"
            value={city}
            onChange={onChangeHandler}
          />
          <button onClick={handleSubmit} type="button">Search</button>
        </div>
        <ArrowBackIcon
          className="Back-home"
          onClick={backToHome}
        />
      </Grid>
      <Grid item xs={6} className="Middle">
        <img src={weatherIcon} alt="wheather-today" className="WeatherIcon" />
      </Grid>
      <Grid item xs={4} className="Bottom">
        <h4 className="degree">
          {currentTemp}
          ℃
        </h4>
        <p className="Title">
          {weatherCondition || 'únknown'}
        </p>
        <p>
          Today -
          {date}
        </p>
        <p>
          {currentCity}
          -
          {count}
        </p>
      </Grid>
    </Grid>
  );
};

export default TodaysWeather;
