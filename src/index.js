//------------------------------ import libraries
import React from "react";
import ReactDOM from "react-dom";

//------------------------------ import components

//------------------------------ import styles and images
import "./index.scss";

const Greeting = () => {
  return <h1>Hola Bienvenido a Wall-e.</h1>;
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
