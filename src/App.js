import React from "react";
import Nav from "./Components/Nav";
import styled from "@emotion/styled";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Project from "./Components/projectView/Project";
import "./base.css";

const Container = styled.div`
  position:relative;
  width:100vw;
  height:100%;
  background-color:#2B4865;
`;


function App() {
  console.log(process.env.PUBLIC_URL); 
  return (
    <Container>
      <Nav></Nav>
      <Banner></Banner>
      <About></About>
      <Project></Project>
    </Container>
  );
}

export default App;
