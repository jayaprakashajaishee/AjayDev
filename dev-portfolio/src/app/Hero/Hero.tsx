import React from "react";
import { styled } from "styled-components";
import { colors } from "../constants/colors";

function Hero() {
  return <HeroDiv id="home">Hero</HeroDiv>;
}

export default Hero;

const HeroDiv = styled.div`
  height: calc(100vh - 50px);
  background-color: ${colors.light};
  margin-top: 50px;
`;
