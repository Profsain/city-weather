import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import fetchWeatherApi from './redux/fetchWeatherApi';
import Grid from '@mui/material/Grid';
import TodaysWeather from './components/TodaysWeather';
import WeatherCard from './components/WeatherCard';
import WeatherStatus from './components/WeatherStatus';
import './styles/App.css';


const App = () => {
  const dispatch = useDispatch();
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    dispatch(fetchWeatherApi(lat, long));
  }, [lat, long])

  console.log('Lantitude = ', lat)
  console.log('Longitude = ', long)
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12} sm={4}>
          <TodaysWeather />
        </Grid>
        <Grid item xs={12} sm={8} container direction="row">
          <Grid item xs={0} sm={1}></Grid>
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
          <Grid item xs={0} sm={1}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;