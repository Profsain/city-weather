import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import SingleCard from './SingleCard';
import setWeatherIcon from '../helper/setWeatherIcons';
import '../styles/WeatherCard.css';

const WeatherCard = () => {
  const nextFiveData = useSelector((state) => state.weather.nextFiveDaysData);

  return (
    <div className="WeatherCard">
      <Grid
        container
        gap={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {nextFiveData.list.map((weather) => (
          <Grid item xs={4} sm={2} key={weather.weather.id}>
            <SingleCard
              condition={weather.weather[0].main}
              temp={weather.main.temp}
              humidity={weather.main.humidity}
              icon={setWeatherIcon(weather.weather[0].main)}
            />
          </Grid>

        ))}
      </Grid>
    </div>
  );
};

export default WeatherCard;
