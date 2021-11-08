import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

import routes from "./routers/routes";
import Routes from "./components/Routes";
import Header from "./components/header/Header";

const App = () => {
    return (
        <div>
            <Header />

            <Routes />
        </div>
    );
};

export default App;
