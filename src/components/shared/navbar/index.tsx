"use client";
import React from "react";
import Container from "../container";
import { HomeIcon } from "@radix-ui/react-icons";
import NavLink from "./components/nav-link";
import SwitchTheme from "./components/switch-theme";
const Navbar = () => {
  return (
    <nav className={"text-xl font-normal backdrop-blur-lg sticky"}>
      <Container size="medium" className="flex justify-between py-6">
        <menu className="flex items-center gap-8">
          <li>
            <NavLink href="/">
              <HomeIcon className="scale-150 text-primary-text" />
              About me
            </NavLink>
          </li>
          <li>
            <NavLink href="https://dev.to/eraywebdev">Blog</NavLink>
          </li>
        </menu>
        <SwitchTheme />
      </Container>
    </nav>
  );
};

export default Navbar;
