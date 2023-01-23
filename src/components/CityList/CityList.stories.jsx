import React from "react";
import CityList from "./CityList";
import { action } from "@storybook/addon-actions";
export default {
  title: "CityList",
  component: CityList,
};
const cities = [
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Mendoza", country: "Argentina" },
  { city: "Montevideo", country: "Uruguay" },
];
export const CityListExample = () => (
  <CityList cities={cities} onClickCity={action("clickEnLaCity")} />
);
