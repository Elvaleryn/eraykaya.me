import React from "react";
import Text from "@/components/shared/text";
import cx from "classnames";
import Image from "next/image";
import { LayoutGroup, motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Modal from "@/components/shared/modal";

const data = [
  {
    id: 1,
    name: "TokenSuite",
    position: "Lead Frontend Developer",
    description:
      "As a lead frontend developer, my responsibilities include assigning tasks to other developers, managing projects, deciding on the tech stack we will use, and of course writing code. I have a strong track record of  ",
    longDescription:
      "<p>As a lead frontend developer, my responsibilities include assigning tasks to other developers, managing projects, deciding on the tech stack we will use, and of course writing code. I have a strong track record of writing and reviewing code, along with my frontend expertise, I also possess the ability to write backend code. Overall, I am a proficient and experienced developer with a commitment to delivering exceptional solutions for our team.</p><div>Key Points</div><ul><li>- Building the foundation of frontend for each project.</li><li>- Interacting with customers and helping them to solve their problems</li><li>- Organizing tasks, planning sprints for other developers.</li><li>- Mentoring junior developers to advance their skills.</li><li>- Making both technical and product-related decisions.</li><li>- Conducting code reviews and refactoring as needed.</li></ul><strong>Tech Stack:</strong> Next.js, Typescript, GraphQL, ethers.js, Sass",
    logo: "/images/token-suite-logo.png",
  },
  {
    id: 2,
    name: "3Pounds",
    position: "Software Developer",
    description:
      "As a lead frontend developer, my responsibilities include assigning tasks to other developers, managing projects, deciding on the tech stack we will use, and of course writing code. I have a strong track record of  ",
    longDescription:
      "<p>As a lead frontend developer, my responsibilities include assigning tasks to other developers, managing projects, deciding on the tech stack we will use, and of course writing code. I have a strong track record of writing and reviewing code, along with my frontend expertise, I also possess the ability to write backend code. Overall, I am a proficient and experienced developer with a commitment to delivering exceptional solutions for our team.</p><div>Key Points</div><ul><li>- Building the foundation of frontend for each project.</li><li>- Interacting with customers and helping them to solve their problems</li><li>- Organizing tasks, planning sprints for other developers.</li><li>- Mentoring junior developers to advance their skills.</li><li>- Making both technical and product-related decisions.</li><li>- Conducting code reviews and refactoring as needed.</li></ul><strong>Tech Stack:</strong> Next.js, Typescript, GraphQL, ethers.js, Sass",
    logo: "/images/3pounds-logo.png",
  },
  {
    id: 3,
    name: "Bilet Bayisi",
    position: "Software Developer",
    description:
      "As the only frontend developer for biletbayisi.com, I was entrusted with the task of rebuilding the entire website from the ground up using Laravel Blades and React. Bilet bayisi receives approximately 400k - 600k visitors per month",
    longDescription:
      "<p>As the only frontend developer for biletbayisi.com, I was entrusted with the task of rebuilding the entire website from the ground up using Laravel Blades and React. Bilet bayisi receives approximately 400k - 600k visitors per month, making it crucial to provide a high-quality and user-friendly experience. I was responsible for implementing every aspect of a flight ticket website, including payment functionality, complex filtering on the frontend, and using time api of JavaScript extensively.</p>",
    logo: "/biletbayisi-logo.svg",
  },
];

const ExperienceItem: React.FC<{ company: typeof data[0] }> = ({ company }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <React.Fragment>
      <div className="hover:scale-105 transition-all duration-300 ease-in-out mt-4 mb-8">
        <motion.div
          className={cx(
            "bg-primary-content",
            "w-full",
            "rounded-2xl border border-primary-900",
            "p-4",
            "hover:cursor-pointer hover:brightness-75 hover:shadow-lg",
            "transition duration-300 ease-in-out",
            "flex gap-8",
            "md:flex-col md:gap-0"
          )}
          onClick={() => {
            setIsOpen(true);
          }}
          layoutId={`${company.id}-experience`}
        >
          <motion.figure
            className="relative w-16 h-16 flex-shrink-0"
            layoutId={`${company.id}-figure`}
          >
            <Image
              src={company.logo}
              alt="company-logo"
              className="rounded-xl"
              fill
            />
          </motion.figure>
          <article className="mt-4 md:mt-2">
            <Text
              as="div"
              size="contentHead"
              weight="bold"
              leading={"tight"}
              className={cx("flex", "md:flex-col")}
            >
              <motion.h1 layoutId={`${company.id}-title`}>
                {company.name} -
              </motion.h1>
              <motion.span
                className="inline"
                layoutId={`${company.id}-subtitle`}
              >
                <Text
                  as="span"
                  size="xxlarge"
                  color="secondary"
                  fontStyle={"italic"}
                  className="ml-2 inline md:ml-0"
                >
                  {company.position}
                </Text>
              </motion.span>
            </Text>
            <Text
              as="div"
              fontFamily={"inconsolata"}
              size={"large"}
              leading={"relaxed"}
              className="mt-4"
            >
              <motion.div layoutId={`${company.id}-description`}>
                {company.description}

                <ArrowRightIcon className="scale-150 inline ml-2" />
              </motion.div>
            </Text>
          </article>
        </motion.div>
      </div>
      <Modal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        layoutId={`${company.id}-experience`}
      >
        <div className="w-full flex gap-8 md:flex-col md:gap-4">
          <motion.figure
            layoutId={`${company.id}-figure`}
            className="flex-shrink-0 w-[64px] h-[64px] relative"
          >
            <Image
              src={company.logo}
              alt={"ai_generated_avatar"}
              className="rounded-full"
              fill
            />
          </motion.figure>
          <article>
            <Text as="div" size="contentHead" weight="bold" leading={"tight"}>
              <motion.h1 layoutId={`${company.id}-title`}>
                {company.name}
              </motion.h1>
            </Text>
            <Text as="div" size="xxlarge" color="secondary">
              <motion.h5 layoutId={`${company.id}-subtitle`}>
                {company.position}
              </motion.h5>
            </Text>
            <Text
              as="div"
              fontFamily={"inconsolata"}
              size={"xxlarge"}
              leading={"relaxed"}
              className="mt-8 md:mt-4 md:max-h-[450px] md:overflow-y-auto md:pr-4"
            >
              <motion.div
                layoutId={`${company.id}-description`}
                animate
                dangerouslySetInnerHTML={{ __html: company.longDescription }}
              ></motion.div>
            </Text>
          </article>
        </div>
      </Modal>
    </React.Fragment>
  );
};

const Experience = () => {
  return (
    <React.Fragment>
      <Text
        as="h1"
        size={"heading"}
        color={"primary"}
        weight={"bold"}
        className="mt-8"
      >
        Experience
      </Text>
      {data.map((company) => (
        <ExperienceItem key={company.id} company={company} />
      ))}
    </React.Fragment>
  );
};

export default Experience;
