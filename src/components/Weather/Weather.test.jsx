import React from "react";
import Weather from "./Weather";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
test("Weather render rain", async () => {
  //AAA Arrange Act Assert
  const { findByRole } = render(<Weather temperature={10} state="rain" />);
  const temp = await findByRole("heading");
  expect(temp).toHaveTextContent("10");
});

//TDD
//1) Se escribe la prueba y se verifica que la prueba falla
//2) Luego se hace que la prueba no falle
//3) Luego se refactoriza
//Principio KISS