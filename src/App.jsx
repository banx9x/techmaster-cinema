import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

import routes from "./routers/routes";
import Routes from "./components/Routes";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={routes.home}>Homepage</Link>
        </li>
        <li>
          <Link to={routes.cinemaLocation}>Cinema Location</Link>
        </li>
        <li>
          <Link to={routes.bookingSeat}>Booking Seat</Link>
        </li>
      </ul>

      <Routes />
    </div>
  );
};

export default App;
