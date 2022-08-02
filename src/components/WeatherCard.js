import React from 'react';
import { Grid } from '@mui/material';
import SingleCard from './SingleCard';
import '../styles/WeatherCard.css'

const WeatherCard = () => {
  return (
    <div className="WeatherCard">
      <Grid
        container
        gap={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4} sm={2}>
          <SingleCard />
        </Grid>
        <Grid item xs={4} sm={2}>
          <SingleCard />
        </Grid>
        <Grid item xs={4} sm={2}>
          <SingleCard />
        </Grid>
        <Grid item xs={4} sm={2}>
          <SingleCard />
        </Grid>
        <Grid item xs={4} sm={2}>
          <SingleCard />
        </Grid>
      </Grid>
    </div>
  )
}

export default WeatherCard