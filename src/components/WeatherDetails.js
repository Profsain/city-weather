import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import Grid from '@mui/material/Grid';
import fetchNextFiveApi from '../redux/fetchNextFive';
import fetchByCity from '../redux/fetchByCityName';
import TodaysWeather from './components/TodaysWeather';
import WeatherCard from './components/WeatherCard';
import WeatherStatus from './components/WeatherStatus';
import '../styles/WeatherDetails.css';

const WeatherDetails = () => {
  const location = useLocation();
  const cityName = location.state;
  const dispatch = useDispatch();
  dispatch(fetchByCity(cityName));
  dispatch(fetchNextFiveApi(cityName));
  return (
    <div className="Detail-container">
      <Grid container>
        <Grid item xs={12} sm={4}>
          <TodaysWeather />
        </Grid>
        <Grid item xs={12} sm={8} container direction="row">
          <Grid item xs={0} sm={1} />
          <Grid
            item
            xs={12}
            sm={10}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4} sm={3}>
              <WeatherCard />
            </Grid>
            <Grid item xs={6} sm={4}>
              <WeatherStatus />
            </Grid>
          </Grid>
          <Grid item xs={0} sm={1} />
        </Grid>
      </Grid>
    </div>
  );
};

export default WeatherDetails;
