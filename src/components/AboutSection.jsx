import React from "react";
import Title from "./TitleComponent.jsx";
import Text from "./TextComponent.jsx";
import Divider from "./DividerComponent.jsx";
import {
  AboutContainer,
  InnerContainer,
  ContainerSection,
  Header,
  Description,
  SkillGrid,
  SkillItem,
  Button,
} from "../styles/About.style.js";

function AboutMe() {
  const link = {
    fontWeight: "bold",
    color: "rgb(119, 19, 191)",
  };

  return (
    <AboutContainer id="about">
      <Title color="black" text="ABOUT ME"></Title>
      <Divider></Divider>
      <Text
        color="black"
        text="In this section you can learn more about me as a software engineer"
      ></Text>
      <InnerContainer>
        <ContainerSection>
          <Header>Some more about me!</Header>
          <Description>
            Hi! I'm a <b>full stack software engineer</b> with professional and
            personal experiences in web, mobile app, and game development!
            <br />
            <br />I am currently a Computer Science student at the{" "}
            <b>University of Maryland College Park</b> class of 2028 honors
            college. I have been programming for nearly 6 years, and have taken
            classes in object-oriented design, advanced data structures, and
            algorithms!
            <br />
            <br />I enjoy competitive programming, research, product
            development, and collaborating with others on large projects. Feel
            free to check out my resume or{" "}
            <a
              style={link}
              target="_blank"
              href="https://www.linkedin.com/in/tristan-tsang-64bb31262/"
            >
              LinkedIn
            </a>{" "}
            for a more in depth overview of my experiences and accomplishments.
            <br />
            <br /> <b>I'm open to job opportunities</b> where I can contribute,
            learn and grow. If you have a good opportunity that matches my
            skillset and experiences, don't hesitate to reach out!
          </Description>
        </ContainerSection>
        <ContainerSection>
          <Header>My Skills</Header>
          <SkillGrid>
            <SkillItem>Java</SkillItem>
            <SkillItem>C++</SkillItem>
            <SkillItem>Python</SkillItem>
            <SkillItem>Javascript</SkillItem>
            <SkillItem>Dart</SkillItem>
            <SkillItem>Visual Basic</SkillItem>
            <SkillItem>HTML</SkillItem>
            <SkillItem>CSS</SkillItem>
            <SkillItem>SQL</SkillItem>
            <SkillItem>GIT</SkillItem>
            <SkillItem>Flutter</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>Agile</SkillItem>
          </SkillGrid>
          <Button
            target="_blank"
            href="https://drive.google.com/file/d/1lfaWh_u3oAEtgPKvhS4IZ5mbY9KbtSyh/view?usp=sharing"
          >
            MY RESUME
          </Button>
        </ContainerSection>
      </InnerContainer>
    </AboutContainer>
  );
}
export default AboutMe;
