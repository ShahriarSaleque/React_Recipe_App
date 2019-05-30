import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./components/Router";
import registerServiceWorker from "./registerServiceWorker";

<link
  href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap"
  rel="stylesheet"
/>;

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
