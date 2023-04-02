"use client";
import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import cx from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Cross1Icon } from "@radix-ui/react-icons";
import Container from "../container";

interface Props {
  layoutId: string;
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const Modal: React.FC<Props> = ({ layoutId, children, setIsOpen, isOpen }) => {
  const timeoutRef = React.useRef<any>(null);
  React.useEffect(() => {
    const close = (e: any) => {
      // check if pressed button is escape
      if (e.keyCode === 27) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [setIsOpen]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      timeoutRef.current = setTimeout(() => {
        document.body.style.overflow = "visible";
      }, 500);
    }
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  const handleClickOverlay = (e: any) => {
    const target = e.target as HTMLElement;
    const parentContainer = target.closest("#modal-content");
    if (!parentContainer) {
      setIsOpen(false);
    }
  };

  return ReactDOM.createPortal(
    <AnimatePresence key={layoutId}>
      {isOpen && (
        <motion.div
          className={cx(
            "modal-overlay",
            "mix-blend-normal",
            "fixed inset-0 z-50 top-0 left-0",
            "min-h-screen h-full",
            "overflow-auto",
            "flex items-center justify-center",
            "backdrop-blur-[6px]",
            "bg-[rgba(0,0,0,0.48)]"
          )}
          layoutId={`${layoutId}-overlay`}
          role="presentation"
          onClick={handleClickOverlay}
        >
          <motion.div
            /*       initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }} */
            style={{ pointerEvents: "auto", overflow: "hidden" }}
            className="relative w-[calc(100% - 308px)] my-0 mx-auto flex justify-between"
            id="modal-content"
          >
            <Container size={"modal"}>{children}</Container>
            <div
              className="cursor-pointer absolute top-0 right-0"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Cross1Icon className="scale-150" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
