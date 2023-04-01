import Link from "next/link";
import styles from "./styles.module.css";
import cx from "classnames";
import React from "react";

interface Props {
  href: string;
}

const NavLink: React.FC<Props & { children: React.ReactNode }> = ({
  children,
  href,
}) => {
  return (
    <Link href={href} className="font-display max-w-sm leading-tight">
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
          {children}
        </div>
      </span>
    </Link>
  );
};

export default NavLink;
