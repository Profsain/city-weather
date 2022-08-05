import React from 'react';
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';
import { CityCard } from './CityCard';
import { nigerianCity } from '../helper/nigerianCity';
import '../styles/CitiesList.css';

const CitiesList = () => {
  const navigate = useNavigate();

  const loadWeatherDetails = (cityName) => {
    navigate("/weather", { state: cityName })
  }

  return (
    <Grid
      className="Cities-container"
      container
      direction="row"
      gap={2}
      justifyContent="center"
    >
      {nigerianCity.map((city) => (
        <Grid
          item xs={12}
          sm={2}
          key={city.id}
          onClick={() => loadWeatherDetails(city.name)}
        >
          <CityCard
            cityName={city.name}
            cityPic={city.image}
          />
        </Grid>
      ))}
      {/* <Grid item xs={12} sm={2}>
        <CityCard />
      </Grid>
      <Grid item xs={12} sm={2}>
        <CityCard />
      </Grid>
      <Grid item xs={12} sm={2}>
        <CityCard />
      </Grid>
      <Grid item xs={12} sm={2}>
        <CityCard />
      </Grid>
      <Grid item xs={12} sm={2}>
        <CityCard />
      </Grid>
      <Grid item xs={12} sm={2}>
        <CityCard />
      </Grid>
      <Grid item xs={12} sm={2}>
        <CityCard />
      </Grid> */}
    </Grid>
  )
};

export default CitiesList;
