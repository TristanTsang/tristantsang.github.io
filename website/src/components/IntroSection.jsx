import React from "react";
import {
  IntroContainer,
  Header,
  Description,
  Button,
} from "../styles/Intro.style.js";

function Intro() {
  return (
    <IntroContainer id="home">
      <Header>HEY, I'M TRISTAN TSANG</Header>
      <Description>
        A dedicated full stack engineer with passion for innovation and product
        development
      </Description>
      <Button href="https://github.com/TristanTsang">GITHUB </Button>
    </IntroContainer>
  );
}
export default Intro;
