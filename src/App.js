import React from "react";
import Nav from "./Components/Nav";
import styled from "@emotion/styled";
import Banner from "./Components/Banner";
import "./base.css";

const Container = styled.div`
  width:100vw;
  height:100vh;
  background-color:#2B4865;
`;
function App() {
  console.log(process.env.PUBLIC_URL); 
  return (
    <Container>
      <Nav></Nav>
      <Banner></Banner>
    </Container>
  );
}

export default App;
