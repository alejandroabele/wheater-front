import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CityList from "./CityList"; //SUT objeto que vamos a testear
import "@testing-library/jest-dom/extend-expect";
const cities = [
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Mendoza", country: "Argentina" },
  { city: "Montevideo", country: "Uruguay" },
];
test("CityList renders", async () => {
  //AAA Arrange Act Assert
  const fnClickOnItem = jest.fn()
  const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem}  />);
  const items = await findAllByRole("listitem");
  expect(items).toHaveLength(3);
});

test("CityList click on item", async () => {
  //Debemos simular una accion del usuario: Click sobre un item
  // Para eso vamos a utilizar una funcion "mock"
  const fnClickOnItem = jest.fn()
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );
  const items = await findAllByRole("listitem")
  // Ahora, para simular la accion vamos a utilizar fireevent
  // fireEvent es parte de la libreria test-libreary/react
  fireEvent.click(items[0])
  // ¿Ahora que dberia suceder?
  // se debio llamar a fnCLicOnItem
  expect(fnClickOnItem).toHaveBeenCalledTimes(1)
});
