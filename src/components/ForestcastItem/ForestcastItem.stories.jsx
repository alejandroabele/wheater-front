import React from "react";
import ForestcastItem from "./ForestcastItem";

export default {
  title: "ForecasteItem",
  component: ForestcastItem,
};

export const LunesSoleado = () => (
  <ForestcastItem hour={10} state="sunny" temperature={23} weekDay="Lunes" />
);
