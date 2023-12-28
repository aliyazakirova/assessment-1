import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Helmet>
      <link rel="stylesheet" type="text/css" href="/dist/output.css" />
    </Helmet>
    <App />
  </>
);
