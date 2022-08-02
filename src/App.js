import React from 'react';
import Grid from '@mui/material/Grid';
import TodaysWeather from './components/TodaysWeather';


const App = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <TodaysWeather />
      </Grid>
      <Grid container item xs={12} sm={8} direction="column">
        <Grid item xs={12} sm={2}>Button top</Grid>
        <Grid item xs={12} sm={4}>Top card</Grid>
        <Grid item xs={12} sm={5}>Buttom card</Grid>
        <Grid item xs={12} sm={1}>footer bottom</Grid>
      </Grid>
    </Grid>
  );
}

export default App;