import React from "react";
import { ProjectsContainer } from "../styles/Projects.style";
import Title from "./TitleComponent";
import Text from "./TextComponent";
import Divider from "./DividerComponent";
import Carousel from "./CarouselComponent";
import MetiorImg from "../assets/Metior.png";
import PortfolioImg from "../assets/PortfolioWebsite.png";

function Projects() {
  function Project(title, subtitle, link, linkTitle, description, image) {
    this.title = title;
    this.image = image;
    this.subtitle = subtitle;
    this.link = link;
    this.linkTitle = linkTitle;
    this.description = description;
  }

  const myProjects = [
    new Project(
      "Metior",
      "Flutter, Dart, SQLite",
      "https://apps.apple.com/us/app/metior-daily-journal/id6478061744",
      "APP STORE",
      "Metior is a cross compatible mobile application built with the Flutter, Dart, and SQLite for database management. It is a high level productivity app which allows for daily task planning, habit tracking, journaling, time blocking, and monitoring productivity analytics. It allows for users to plan out and reflect on their days, weeks, and even months.",
      MetiorImg
    ),
    new Project(
      "Portfolio Website",
      "React, Javascript, HTML/CSS",
      "https://github.com/TristanTsang/TsangPortfolioWebsite",
      "GITHUB",
      "A personal portfolio website created with React, Javascript, and HTML/CSS. This website is built following responsive design principles allowing users to interact and access the website from different devices and window sizes. It contains dynamic states, a contact form, a carousel, and many other advanced features.",
      PortfolioImg
    ),
  ];
  return (
    <ProjectsContainer id="project">
      <Title color="white" text="PROJECTS"></Title>
      <Divider></Divider>
      <Text
        color="white"
        text="Check out some of my past software development work"
      ></Text>
      <Carousel projects={myProjects}></Carousel>
    </ProjectsContainer>
  );
}
export default Projects;
