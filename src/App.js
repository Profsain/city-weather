import React from 'react';
import Grid from '@mui/material/Grid';


const App = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        This is todays weather information
        This is todays weather information
        This is todays weather information
        This is todays weather information
      </Grid>
      <Grid item xs={12} sm={8}>
        This is the largest section of the weather app This is the largest section of the weather app 
        This is the largest section of the weather app This is the largest section of the weather app 
        This is the largest section of the weather app This is the largest section of the weather app 
      </Grid>
    </Grid>
  );
}

export default App;