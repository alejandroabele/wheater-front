import React from "react";
import Forecast from "./Forecast";
export default {
  title: "Forecast",
  component: Forecast,
};
const forecastItemList = [
  { weekDay: "Lunes", hour: 20, state: "sunny", temperature: 20 },
  { weekDay: "Martes", hour: 20, state: "rain", temperature: 20 },
  { weekDay: "Miercoles", hour: 20, state: "cloud", temperature: 20 },
  
  
];

export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList}></Forecast>
);
