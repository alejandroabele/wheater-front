import React from "react";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import { Grid } from "@material-ui/core";

//renderCityAndCountry se convierete eun una funciona que retorna otra funcion
// Utilizacion de (Currying) Sirve para fijar el primero de los terminos
const renderCityAndCountry = (eventOnClickCity) => (cityAndCountry) => {
  const { city, country } = cityAndCountry;
  return (
    <li key={city} onClick={eventOnClickCity}>
      <Grid container justifyContent="center" alignItems="flex-start">
        <Grid item md={8} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={4} xs={12}>
          <Weather temperature={10} state="sunny"></Weather>
        </Grid>
      </Grid>
    </li>
  );
};
const CityList = ({ cities, onClickCity}) => {
  return (
    <ul>
      {cities.map((cityAndCountry) =>
        renderCityAndCountry(onClickCity)(cityAndCountry)
      )}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
