import Container from "@/components/shared/container";
import Text from "@/components/shared/text";
import Image from "next/image";
import React from "react";
import cx from "classnames";
import { ArrowRightIcon } from "@radix-ui/react-icons";

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
      <div
        className={cx(
          "bg-primary-content",
          "w-full",
          "rounded-2xl border border-primary-900",
          "p-4",
          "hover:cursor-pointer hover:brightness-75 hover:shadow-lg hover:scale-110",
          "transition-all duration-300 ease-in-out"
        )}
      >
        <article>
          <div className="flex gap-8">
            <figure className="relative flex-shrink-0">
              <Image
                src={"/images/avatar-v10.png"}
                alt={"ai_generated_avatar"}
                className="rounded-full"
                width={150}
                height={150}
              />
            </figure>
            <div>
              <Text as="h1" size="heading" weight="bold" leading={"tight"}>
                Eray Kaya
              </Text>
              <Text as="h5" size="xxlarge" color="secondary">
                Lead Developer
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
      </div>
    </Container>
  );
};

export default Home;
