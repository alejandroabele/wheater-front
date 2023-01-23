import React from "react";
import { Link } from "react-router-dom";
/* import CityInfo from "../components/CityInfo";
import Weather from "../components/Weather";
import WeatherDetails from "../components/WeatherDetails";
import Forecast from "../components/Forecast";
import ForecastChart from "../components/ForecastChart"; */
import Grid from "@material-ui/core/Grid";
const CityPage = () => {
  return (
    <div>
      <Grid container justifyContent="center">
        <div>
          <Link to="/main"> Volver</Link>
        </div>
      </Grid>
    </div>
  );
};

export default CityPage;
