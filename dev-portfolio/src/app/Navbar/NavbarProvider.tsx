"use client";
import Link from "next/link";
import React, { createContext, useState } from "react";
import styled, { css } from "styled-components";
import { navbarItems } from "../constants/navbarItems";

interface INavbar {
  selectedNavItem: string;
  onSelectNavItem: (id: string) => void;
}

type props = {
  children?: React.ReactNode;
};

const defaultValue: INavbar = {
  selectedNavItem: "",
  onSelectNavItem: () => {},
};

export const NavbarContext = createContext<INavbar>(defaultValue);

const NavbarProvider: React.FC<props> = ({ children }) => {
  const [selectedNavItem, setSelectedNavItem] = useState("hero");

  const onSelectNavItem = (id: string) => {
    setSelectedNavItem(id);
  };

  return (
    <NavbarContext.Provider value={{ selectedNavItem, onSelectNavItem }}>
      <Navbar>
        <div>Ajaygopal Jayaprakash</div>
        <nav style={{ display: "flex" }}>
          <NavbarButtons selected={selectedNavItem === navbarItems.hero}>
            <Link href="#home">Home</Link>
          </NavbarButtons>
          <NavbarButtons selected={selectedNavItem === navbarItems.about}>
            <Link href="#about">About</Link>
          </NavbarButtons>
          <NavbarButtons selected={selectedNavItem === navbarItems.skills}>
            <Link href="#skills">Skills</Link>
          </NavbarButtons>
        </nav>
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
