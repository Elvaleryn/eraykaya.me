import React from "react";
import Container from "../container";
import cx from "classnames";
import styles from "./styles.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={"text-xl py-6 font-normal"}>
      <Container size="medium" className="flex justify-between">
        <menu className="flex [&>li]:ml-4">
          <li>
            <Link href="/" className="font-display max-w-sm leading-tight">
              <span
                className={cx(
                  "link pb-2",
                  styles["link-underline"],
                  styles["link-underline-black"]
                )}
              >
                lg ERAY KAYA
              </span>
            </Link>
          </li>
          <li>Blog</li>
        </menu>
        <div>test</div>
      </Container>
    </nav>
  );
};

export default Navbar;
