import React from "react";
import Nav from "./Components/Nav";
import styled from "@emotion/styled";
import Banner from "./Components/BannerView/Banner";
import About from "./Components/AboutView/About";
import Project from "./Components/projectView/Project";
import ContactForm from "./Components/contactView/Contact";
import "./base.css";

const Container = styled.div`
  position:relative;
  width:100vw;
  height:100%;
  background-color:#2B4865;
`;


function App() {
  return (
    <Container>
      <Nav ></Nav>
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <ContactForm></ContactForm>
    </Container>
  );
}

export default App;
