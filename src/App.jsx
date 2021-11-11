import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import routes from "./routers/routes";
import Routes from "./components/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer"
import styled from "styled-components";
const Content = styled.div`
  box-sizing: border-box;
  padding: 40px 0px 40px 0px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;
const Content_Container = styled.div`
  max-width: 1400px;
  padding: 0;
  margin: 0;
`;

const App = () => {
  return (
    <div>
      <Header/>
      <Content>
        <Content_Container>
          <Routes />
        </Content_Container>
      </Content>
      <Footer/>
    </div>
  );
};

export default App;
