import React from "react";
import Container from "../container";
import cx from "classnames";
const Navbar = () => {
  return (
    <Container size="medium" className="flex">
      <nav className={cx("my-8 px-4", "flex justify-between", "w-full")}>
        <menu className="flex [&>li]:ml-4">
          <li>lg</li>
          <li>ERAY KAYA</li>
          <li>Blog</li>
        </menu>
        <div>test</div>
      </nav>
    </Container>
  );
};

export default Navbar;
