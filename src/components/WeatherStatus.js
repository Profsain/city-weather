import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import StatusCards from './StatusCards';
import '../styles/WeatherStatus.css';

const WeatherStatus = () => {
  const weatherData = useSelector((state) => state.weather.weatherData);
  const wind = weatherData?.wind?.speed || 'No wind';
  const humidit = weatherData?.main?.humidity || 'Nill';
  const visibilit = weatherData?.visibility || 'Nill';
  const pressur = weatherData?.main?.pressure || 'Nill';
  return (
    <div className="WeatherStatus">
      <h2>Today&apos;s Highlight</h2>
      <Grid
        container
        gap={6}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={5}>
          <StatusCards
            title="Wind Status"
            measure={wind}
            unit="mph"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <StatusCards
            title="Humidity"
            measure={humidit}
            unit="%"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <StatusCards
            title="Visibility"
            measure={visibilit}
            unit="miles"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <StatusCards
            title="Air Pressure"
            measure={pressur}
            unit="mb"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default WeatherStatus;
