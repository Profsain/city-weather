import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import moment from 'moment';
import setWeatherIcon from '../redux/setWeatherIcons';
import '../styles/TodaysWeather.css';

const TodaysWeather = () => {
  const weatherData = useSelector((state) => state.weather.weatherData);
  const weatherCondition = weatherData.weather[0].main;
  const currentTemp = weatherData.main.temp;
  const currentCity = weatherData.name;
  const country = weatherData.sys.country;
  const date = moment().format('dddd Do MMMM YYYY');
  const weatherIcon = setWeatherIcon(weatherCondition);
  console.log(weatherIcon)

  return (
    <Grid
      className="Container"
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={2} className="Top">
        <div className="Search">
          <Button variant="contained">Search for places</Button>
        </div>
        <WbSunnyIcon />
      </Grid>
      <Grid item xs={6} className="Middle">
        <img src={weatherIcon} alt="wheather-today" className="WeatherIcon"/>
      </Grid>
      <Grid item xs={4} className="Bottom">
        <h4 className="degree">{currentTemp}℃</h4>
        <p className="Title">{weatherCondition}</p>
        <p>Today - {date}</p>
        <p>{currentCity} {country}</p>
      </Grid>
    </Grid>
  );
}

export default TodaysWeather;