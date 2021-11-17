import "./App.css";
import Routes from "./components/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
const Content = styled.div`
 
  background-color: #f0f0f0;

`;


const App = () => {
  return (
    <>
      <Header />
      <Content>
 
     <Routes />
    
      </Content>
      <Footer />
    </>
  );
};

export default App;
