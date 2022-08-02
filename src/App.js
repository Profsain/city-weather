import React from 'react';
import Grid from '@mui/material/Grid';
import TodaysWeather from './components/TodaysWeather';
import WeatherCard from './components/WeatherCard';
import WeatherStatus from './components/WeatherStatus';
import './styles/App.css';


const App = () => {
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