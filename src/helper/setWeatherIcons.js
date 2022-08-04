const setWeatherIcon = (condition) => {
  let icon = null;
  switch (condition) {
    case 'Rain':
      icon = 'icons/HeavyRain.png';
      break;
    case 'Drizzle':
      icon = 'icons/LightRain.png';
      break;
    case 'Thunderstorm':
      icon = 'icons/Thunderstorm.png';
      break;
    case 'Snow':
      icon = 'icons/Snow.png';
      break;
    case 'Clear':
      icon = 'icons/Clear.png';
      break;
    case 'Clouds':
      icon = 'icons/HeavyCloud.png';
      break;
    case 'Sleet':
      icon = 'icons/Sleet.png';
      break;
    default:
      icon = 'icons/LightCloud.png';
  }
  return icon;
};

export default setWeatherIcon;
