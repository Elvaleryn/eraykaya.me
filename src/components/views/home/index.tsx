"use client";
import Container from "@/components/shared/container";
import React from "react";
import AboutMe from "./components/about-me";
import Socials from "./components/socials";
import Experience from "./components/experience";

const Home = () => {
  return (
    <Container size={"medium"} className="mt-16">
      <AboutMe />
      <Socials />
      <Experience />
    </Container>
  );
};

export default Home;
