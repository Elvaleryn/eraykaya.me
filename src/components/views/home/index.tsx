import Container from "@/components/shared/container";
import Text from "@/components/shared/text";
import Image from "next/image";
import React from "react";
import cx from "classnames";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AboutMe from "./components/about-me";

const Home = () => {
  return (
    <Container size={"medium"} className="mt-16">
      {/*   <Image
        src={"/images/avatar-v10.png"}
        alt="ai_generated_avatar"
        width={150}
        height={280}
        className="border border-transparent rounded-full"
      /> */}
      <AboutMe />
    </Container>
  );
};

export default Home;
