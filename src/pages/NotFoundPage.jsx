import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      404 Not found
      <div>
        <Link to="/main"> Ir a Main</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
