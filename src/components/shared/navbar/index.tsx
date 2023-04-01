"use client";
import React from "react";
import Container from "../container";
import cx from "classnames";
import styles from "./styles.module.css";
import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/hooks/use-theme";
import NavLink from "./components/nav-link";
import SwitchTheme from "./components/switch-theme";
const Navbar = () => {
  const { toggleTheme } = useTheme();
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
            <NavLink href="/blog">Blog</NavLink>
          </li>
        </menu>
        <SwitchTheme />
      </Container>
    </nav>
  );
};

export default Navbar;
