import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import ForestcastItem from "../ForestcastItem";
import IconState, { validValues } from "../IconState";

const renderForecastItem = (forecast) => {
  const { hour, state, temperature, weekDay } = forecast;
  //Hay que poner un identificador unico
  // Vamos a poner una marca para encontrar cada item (ForecastItem)
  return (
    <Grid data-testid="forecast-item-container" item key={`${weekDay}${hour}`}>
      <ForestcastItem
        hour={hour}
        state={state}
        temperature={temperature}
        weekDay={weekDay}
      />
    </Grid>
  );
};

const Forecast = ({ forecastItemList }) => {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        {forecastItemList.map((forecast) => renderForecastItem(forecast))}
      </Grid>
    </>
  );
};

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      state: PropTypes.oneOf(validValues).isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ),
};

export default Forecast;
