import React from "react";
import WeatherDetails from "./WeatherDetails";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
test("WethaerDetails render", async () => {
  const { findByText } = render(<WeatherDetails humidity={10} wind={20} />);
  const wind = await findByText(/10/);
  const humidity = await findByText(/20/);

  expect(wind).toHaveTextContent("Humedad: 10 %");

  expect(humidity).toHaveTextContent("Viento: 20 km/h");
});
