import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import StatusCards from './StatusCards';
import '../styles/WeatherStatus.css';

const WeatherStatus = () => {
  const weatherData = useSelector((state) => state.weather.weatherData);
  console.log(weatherData)
  const wind = weatherData.wind.speed;
  const humidity = weatherData.main.humidity;
  const visibility = weatherData.visibility;
  const pressure = weatherData.main.pressure;
  return (
    <div className="WeatherStatus">
      <h2>Today's Highlight</h2>
      <Grid
        container
        gap={6}
        direction="row"
        justifyContent="center"
        alignItems="center"

      >
        <Grid item xs={12} md={5}>
          <StatusCards
            tittle= "Wind Status"
            measure={wind}
            unit= "mph"
          />
        </Grid>
        <Grid item xs={12} md={5}>
        <StatusCards
            tittle= "Humidity"
            measure={humidity}
            unit= "%"
          />
        </Grid>
        <Grid item xs={12} md={5}>
        <StatusCards
            tittle= "Visibility"
            measure={visibility}
            unit= "miles"
          />
        </Grid>
        <Grid item xs={12} md={5}>
        <StatusCards
            tittle= "Air Pressure"
            measure={pressure}
            unit= "mb"
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default WeatherStatus
