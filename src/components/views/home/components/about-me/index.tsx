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
    <React.Fragment>
      <Text
        as="h1"
        size={"heading"}
        color={"primary"}
        weight={"bold"}
        className="mb-4"
      >
        About me
      </Text>
      <div className="hover:scale-105 transition-all duration-300 ease-in-out">
        <motion.div
          className={cx(
            "bg-primary-content",
            "w-full",
            "rounded-2xl border border-primary-900",
            "p-4",
            "hover:cursor-pointer hover:brightness-75 hover:shadow-lg",
            "transition duration-300 ease-in-out"
          )}
          onClick={() => {
            setIsOpen(true);
          }}
          layoutId="about-me"
        >
          <article>
            <div className="flex gap-8 md:flex-col md:gap-4">
              <motion.figure
                className="relative flex-shrink-0 w-36 h-48 md:w-24 md:h-32"
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
                <Text
                  as="div"
                  size="contentHead"
                  weight="bold"
                  leading={"tight"}
                >
                  <motion.h1 layoutId="about-me-title">Eray Kaya</motion.h1>
                </Text>
                <Text as="div" size="xlarge" color="secondary">
                  <motion.h5 layoutId="about-me-subtitle">
                    Lead Developer
                  </motion.h5>
                </Text>

                <Text
                  as="div"
                  fontFamily={"inconsolata"}
                  size={"large"}
                  leading={"relaxed"}
                  className="mt-4"
                >
                  <motion.div layoutId="about-me-description">
                    As an accomplished software developer and team leader, I
                    have excelled in creating products and managing projects
                    since 2017. I am committed to developing clean, maintainable
                    code bases, and constantly seek to learn about new
                    technologies and tech stacks.
                    <span>
                      <ArrowRightIcon className="inline scale-125 ml-4" />
                    </span>
                  </motion.div>
                </Text>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} layoutId="about-me">
        <div className="w-full flex gap-8 md:flex-col md:gap-3">
          <motion.figure
            layoutId="about-me-figure"
            className="relative flex-shrink-0 w-36 h-48 md:w-24 md:h-32"
          >
            <Image
              src={"/images/avatar-v10.png"}
              alt={"ai_generated_avatar"}
              className="rounded-full"
              fill
            />
          </motion.figure>
          <article>
            <Text
              as="div"
              size="contentHead"
              weight="bold"
              leading={"tight"}
              color={"modal"}
            >
              <motion.h1 layoutId="about-me-title">Eray Kaya</motion.h1>
            </Text>
            <Text as="div" size="xxlarge" color="modal">
              <motion.h5 layoutId="about-me-subtitle">Lead Developer</motion.h5>
            </Text>

            <Text
              as="div"
              fontFamily={"inconsolata"}
              size={"xxlarge"}
              leading={"relaxed"}
              className="mt-8 md:mt-4 md:max-h-[400px] md:overflow-x-auto md:pr-4"
              color={"modal"}
            >
              <motion.div layoutId="about-me-description" animate>
                As an accomplished software developer and team leader, I have
                excelled in creating products and managing projects since 2017.
                I am committed to developing clean, maintainable code bases, and
                constantly seek to learn about new technologies and tech stacks.
                In my career, I have built single-page applications, traditional
                web apps, and decentralized applications using various
                frameworks and libraries such as React, Vue, Next.js, Node.js,
                Ethers, Web3.js, Graphql, Trpc, express. However, I am not
                limited to these tools and am open to exploring new options to
                create innovative and effective solutions.
              </motion.div>
            </Text>
          </article>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default AboutMe;
