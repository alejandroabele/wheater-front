//Estructura del test
import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "./CityInfo"; //SUT: Subject under testing (objeto que vamos a teaster)
test("CityInfo render", async () => {
  //ESTANDAR PARA ESCRIBIR TEST
  // AAA
  // Arrange --> Organizar todo para ejecutar el test
  // Act --> Ejecutamos el test
  const city = "Buenos Aires";
  const country = "Argentina";
  // Render: renderiza el component y retorna una serie de funciones
  // de las cuales vamos a utilizar findAllByRole
  const { findAllByRole } = render(
    <CityInfo city={"Buenos Aires"} country={"Argentina"}></CityInfo>
  );
  //findAllByROle nos va a buscar todos los componentes que sean heading (h1, h2, ..)
  // El resultado es un array de componentes
  const cityAndCoutryComponents = await findAllByRole("heading");
  // Assert --> Evaluamos si el test retorna lo que esperamos

  //¿Cuando el test es correcto?
  // Definicion:
  // Cuando en el primer elemento (heading) se encuentre la ciudad "Buenos Aires"
  // y cuando en el segundo elemento se encuentre el pais Argentina
  expect(cityAndCoutryComponents[0]).toHaveTextContent(city);
  expect(cityAndCoutryComponents[1]).toHaveTextContent(country);
});
