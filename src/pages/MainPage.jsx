import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CityList from "../components/CityList";
// Hook para manejar la historia del navegador
// Los hook nos permiten volver a renderizar los componentes
const MainPage = () => {
  const history = useHistory();
  const cities = [
    { city: "Buenos Aires", country: "Argentina" },
    { city: "Mendoza", country: "Argentina" },
    { city: "Montevideo", country: "Uruguay" },
  ];
  const onClickHandler = () => {
    history.push("/city");
  };
  return (
    <div>
      <h2>Lista de ciudades</h2>
      <CityList cities={cities} onClickCity={onClickHandler}></CityList>
    </div>
  );
};

export default MainPage;
