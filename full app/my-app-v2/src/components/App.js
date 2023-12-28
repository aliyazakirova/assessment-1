import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogInPage from "../pages/LogInPage/LogInPage";
import RegPage from "../pages/RegPage/RegPage";
import LocationAndResults from "../pages/LocationAndResults/LocationAndResults";
import AboutUs from "../pages/AboutUs/AboutUs";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import NavBar from "./NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/reg_page" element={<RegPage />} />
        <Route path="/location_and_results" element={<LocationAndResults />} />
        <Route path="/" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
