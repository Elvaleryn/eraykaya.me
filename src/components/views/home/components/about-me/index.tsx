"use client";
import React from "react";
import Text from "@/components/shared/text";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import cx from "classnames";
import Modal from "@/components/shared/modal";
import { LayoutGroup, motion } from "framer-motion";

const AboutMe = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <LayoutGroup id="about-me">
      <motion.div
        className={cx(
          "bg-primary-content",
          "w-full",
          "rounded-2xl border border-primary-900",
          "p-4",
          "hover:cursor-pointer hover:brightness-75 hover:shadow-lg hover:scale-110",
          "transition-all duration-300 ease-in-out"
        )}
        onClick={() => {
          setIsOpen(true);
        }}
        layoutId="about-me-overlay"
      >
        <article>
          <div className="flex gap-8">
            <motion.figure
              className="relative flex-shrink-0 w-36 h-48"
              layoutId="about-me-figure"
            >
              <Image
                src={"/images/avatar-v10.png"}
                alt={"ai_generated_avatar"}
                className="rounded-full"
                fill
              />
            </motion.figure>
            <div>
              <Text as="h1" size="heading" weight="bold" leading={"tight"}>
                <motion.div layoutId="about-me-title">Eray Kaya</motion.div>
              </Text>
              <Text as="h5" size="xxlarge" color="secondary">
                <motion.div layoutId="about-me-subtitle">
                  Lead Developer
                </motion.div>
              </Text>

              <Text
                as="p"
                fontStyle={"inconsolata"}
                size={"xxlarge"}
                leading={"relaxed"}
              >
                As an accomplished software developer and team leader, I have
                excelled in creating products and managing projects since 2017.
                I am committed to developing clean, maintainable code bases, and
                constantly seek to learn about new technologies and tech stacks.
                <span>
                  <ArrowRightIcon className="inline scale-125 ml-4" />
                </span>
              </Text>
            </div>
          </div>
        </article>
      </motion.div>

      <Modal setIsOpen={setIsOpen} isOpen={isOpen} layoutId="about-me">
        <div className="w-full flex gap-8">
          <motion.figure
            layoutId="about-me-figure"
            className="flex-shrink-0 w-[250px] h-[350px] relative"
          >
            <Image
              src={"/images/avatar-v10.png"}
              alt={"ai_generated_avatar"}
              className="rounded-full"
              fill
            />
          </motion.figure>
          <article>
            <Text as="h1" size="heading" weight="bold" leading={"tight"}>
              <motion.div layoutId="about-me-title">Eray Kaya</motion.div>
            </Text>
            <Text as="h5" size="xxlarge" color="secondary">
              <motion.div layoutId="about-me-subtitle">
                Lead Developer
              </motion.div>
            </Text>

            <Text
              as="div"
              fontStyle={"inconsolata"}
              size={"xxlarge"}
              leading={"relaxed"}
            >
              <motion.div
                layoutId="about-me-description"
                className="overflow-hidden"
                animate
              >
                As an accomplished software developer and team leader, I have
                excelled in creating products and managing projects since 2017.
                I am committed to developing clean, maintainable code bases, and
                constantly seek to learn about new technologies and tech stacks.
                In my career, I have built single-page applications, traditional
                web apps, and decentralized applications using various
                frameworks and libraries such as React, Vue, Next.js, Node.js,
                Ethers, Web3.js, Graphql, Trpc,
              </motion.div>
            </Text>
          </article>
        </div>
      </Modal>
    </LayoutGroup>
  );
};

export default AboutMe;
