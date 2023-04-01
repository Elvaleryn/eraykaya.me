import React from "react";
import Container from "../container";
import cx from "classnames";
import styles from "./styles.module.css";
import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
const Navbar = () => {
  return (
    <nav className={"text-xl font-normal backdrop-blur-lg sticky"}>
      <Container size="medium" className="flex justify-between py-6">
        <menu className="flex items-center gap-8">
          <li>
            <Link href="/" className="font-display max-w-sm leading-tight">
              <span
                className={cx(
                  "link pb-2",
                  "text-center",
                  styles["link-underline"],
                  styles["link-underline-black"],
                  styles["iconBg"]
                )}
              >
                <div
                  className={cx(
                    "inline-flex justify-center items-center gap-4",
                    "rounded"
                  )}
                >
                  <HomeIcon className="scale-150 text-white" />
                  Eray
                </div>
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
