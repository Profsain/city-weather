import React from 'react';
import { Grid } from '@mui/material';
import StatusCards from './StatusCards';
import '../styles/WeatherStatus.css';

const WeatherStatus = () => {
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
          <StatusCards />
        </Grid>
        <Grid item xs={12} md={5}>
          <StatusCards />
        </Grid>
        <Grid item xs={12} md={5}>
          <StatusCards />
        </Grid>
        <Grid item xs={12} md={5}>
          <StatusCards />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <StatusCards />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StatusCards />
        </Grid> */}
      </Grid>
    </div>
  )
}

export default WeatherStatus