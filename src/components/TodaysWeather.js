import React from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import '../styles/TodaysWeather.css';

const TodaysWeather = () => {
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
        <img src="shower.png" alt="wheather-today" />
      </Grid>
      <Grid item xs={4} className="Bottom">
        <h4 className="degree">15<span>0C</span></h4>
        <p className="Title">Shower</p>
        <p>Today - Tue. 2 August</p>
        <p>Abuja</p>
      </Grid>
    </Grid>
  );
}

export default TodaysWeather;