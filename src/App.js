import React from "react";
import Nav from "./Components/Nav";
import styled from "@emotion/styled";
import "./base.css";

const Container = styled.div`
  width:100vw;
  height:100vh;
  background-color:#2B4865;
`;
function App() {
  return (
    <Container>
      <Nav></Nav>
    </Container>
  );
}

export default App;
