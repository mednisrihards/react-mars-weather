import React from 'react';
import classes from '../components/Forecast.module.scss';
import DayForecast from './DayForecast';

function Forecast({sol}) {

  return (
    <div className={classes.forecastContainer}>
        <DayForecast high={sol.maxTemp} low={sol.minTemp} windSpeed={sol.windSpeed} degrees={sol.compassDeg} date={sol.date} sol={sol.sol} />
    </div>
  );
}

export default Forecast;