import Container from "@/components/shared/container";
import Text from "@/components/shared/text";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container size="medium" className="mt-16">
      <Text as="h1" size="heading" className="mb-8" weight={"bold"}>
        Blog Posts
      </Text>
      {children}
    </Container>
  );
};

export default Layout;
