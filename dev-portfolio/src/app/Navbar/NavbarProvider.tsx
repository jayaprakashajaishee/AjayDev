"use client";
import Link from "next/link";
import React, { createContext, useState } from "react";
import styled, { css } from "styled-components";
import { navbarItems } from "../constants/navbarItems";
import { motion } from "framer-motion";
import { colors } from "../constants/colors";
import { MdModeNight, MdLightMode } from "react-icons/md";

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
  const [theme, setTheme] = useState("light");

  const onSelectNavItem = (id: string) => {
    setSelectedNavItem(id);
  };

  const changeTheme = () => {
    setTheme((prev) => {
      if (prev === "light") {
        return "dark";
      }

      return "light";
    });
  };

  return (
    <NavbarContext.Provider value={{ selectedNavItem, onSelectNavItem }}>
      <Navbar
        layout
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ ease: "easeIn" }}
        setTheme={theme}
      >
        <motion.div
          layout
          style={{ fontSize: "large", fontWeight: "bold" }}
          whileHover={{ color: colors.accent }}
        >
          <Link href="#home">AJAY|DEV</Link>
        </motion.div>
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
          <ThemeButton onClick={changeTheme}>
            {theme === "light" && <MdLightMode size="25" />}
            {theme === "dark" && <MdModeNight size="25" />}
          </ThemeButton>
        </nav>
      </Navbar>
      <div>{children}</div>
    </NavbarContext.Provider>
  );
};

const Navbar = styled(motion.div)<{ theme?: colors }>`
  overflow: hidden;
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  ${(props) =>
    props.theme &&
    css`
      background-color: ${props.setTheme === "light"
        ? colors.light
        : colors.dark};
      color: ${props.setTheme === "dark" ? colors.light : colors.dark};
    `}
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

const ThemeButton = styled.div`
  margin: 0px 10px 0px 10px;
  display: flex;
  align-items: center;
`;

export default NavbarProvider;
