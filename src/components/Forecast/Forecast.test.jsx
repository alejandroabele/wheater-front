import React from "react";
import Forecast from "./Forecast";
import { findAllByTestId, render } from "@testing-library/react";

const forecastItemList = [
  { weekDay: "Lunes", hour: 20, state: "sunny", temperature: 20 },
  { weekDay: "Martes", hour: 20, state: "rain", temperature: 20 },
  { weekDay: "Miercoles", hour: 20, state: "cloud", temperature: 20 },
  { weekDay: "Jueves", hour: 20, state: "cloudy", temperature: 20 },
  { weekDay: "Viernes", hour: 20, state: "cloud", temperature: 18 },

];
test("Forecast Render", async () => {
  // Nos ayuda a encontrar texto mediante un identificador unico
  // findAllByTestId nos va a permiri encotnar cada item con esa marca
  const { findAllByTestId } = render(
    <Forecast forecastItemList={forecastItemList} />
  );
  const forecastItems = await findAllByTestId("forecast-item-container");
  expect(forecastItems).toHaveLength(5);
});
