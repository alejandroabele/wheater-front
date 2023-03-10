import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import "typeface-roboto";
const CityInfo = ({ city, country }) => {
  return (
    <>
      <Typography variant="h4" display="inline">
        {city},{" "}
      </Typography>
      <Typography variant="h5" display="inline">
        {country}
      </Typography>
    </>
  );
};

CityInfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default CityInfo;
