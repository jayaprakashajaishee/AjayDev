"use client";
import React, { createContext } from "react";
import styled, { css } from "styled-components";

interface INavbar {
  testValue?: number;
}

type props = {
  children?: React.ReactNode;
};

const defaultValue: INavbar = { testValue: 0 };

export const NavbarContext = createContext<INavbar>(defaultValue);

const NavbarProvider: React.FC<props> = ({ children }) => {
  return (
    <NavbarContext.Provider value={{ testValue: 1000 }}>
      <Navbar>
        <div>AJAY_DEV</div>
        <div style={{ display: "flex" }}>
          <NavbarButtons>1</NavbarButtons>
          <NavbarButtons>2</NavbarButtons>
          <NavbarButtons>3</NavbarButtons>
        </div>
      </Navbar>
      <div>{children}</div>
    </NavbarContext.Provider>
  );
};

const Navbar = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const NavbarButtons = styled.div<{ selected?: boolean }>`
  margin: 0px 10px 0px 10px;
  font-size: large;
  font-weight: 700;
  ${(props) =>
    props.selected &&
    css`
      text-decoration: underline;
    `}
`;

export default NavbarProvider;
