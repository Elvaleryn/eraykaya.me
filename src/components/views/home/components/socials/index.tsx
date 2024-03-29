import React from "react";
import cx from "classnames";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Text from "@/components/shared/text";

interface ISocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon: React.FC<ISocialIconProps> = ({ href, icon }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cx(
          "w-16 h-16 md:w-10 md:h-10",
          "border rounded-xl",
          "bg-primary-theme",
          "flex items-center justify-center",
          "transition duration-300 ease-in-out",
          "hover:bg-primary-900",
          "transform hover:scale-110",
          "[&>svg]:scale-[3] md:[&>svg]:scale-[2] text-primary-text",
          "md:[&>img]:scale-[.8]"
        )}
      >
        {icon}
      </a>
    </li>
  );
};
const Socials = () => {
  return (
    <React.Fragment>
      <Text
        as="h1"
        size={"heading"}
        color={"primary"}
        weight={"bold"}
        className="mt-8"
      >
        Links
      </Text>
      <ul
        className={cx(
          "flex items-center justify-center gap-8",
          "w-full",
          "bg-primary-content",
          "rounded-2xl border border-primary-900",
          "py-8 mt-4"
        )}
      >
        <SocialIcon
          href="https://twitter.com/eraywebdev"
          icon={<TwitterLogoIcon />}
        />
        <SocialIcon
          href="https://www.linkedin.com/in/eray-kaya-17955b1a9/"
          icon={<LinkedInLogoIcon />}
        />
        <SocialIcon
          href="https://dev.to/eraywebdev"
          icon={
            <img
              width={48}
              height={48}
              src="/devto-icon.svg"
              alt="devto_icon"
            />
          }
        />
        <SocialIcon
          href="https://github.com/Elvaleryn"
          icon={<GitHubLogoIcon />}
        />
      </ul>
    </React.Fragment>
  );
};

export default Socials;
