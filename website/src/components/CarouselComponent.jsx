import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  ProjectCover,
  Title,
  Subtitle,
  Button,
  ProjectImage,
  CarouselContainer,
  Description,
  HideWhenBig,
  HideWhenSmall,
} from "../styles/Carousel.style";
function Carousel(props) {
  const [index, setIndex] = useState(0);
  const style = {
    backgroundColor: "rgb(119, 19, 191)",
    width: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    marginBottom: "20px",
    height: "5px",
    borderRadius: "5px",
  };

  function decrement() {
    setIndex((c) => (c > 0 ? c - 1 : props.projects.length - 1));
  }

  function increment() {
    setIndex((c) => (c < props.projects.length - 1 ? c + 1 : 0));
  }
  const buttonStyle = {
    fill: "white",
    backgroundColor: "transparent",
    borderColor: "transparent",
    cursor: "pointer",
  };

  return (
    <div>
      <HideWhenBig>
        <button style={buttonStyle} onClick={decrement}>
          <svg
            color="white"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
          </svg>
        </button>
        <button style={buttonStyle} onClick={increment}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          </svg>
        </button>
      </HideWhenBig>
      <CarouselContainer>
        <HideWhenSmall>
          <button style={buttonStyle} onClick={decrement}>
            <svg
              color="white"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
            </svg>
          </button>
        </HideWhenSmall>

        <ProjectCover>
          <ProjectImage
            src={props.projects[index].image}
            alt="Image"
          ></ProjectImage>
          <Title>{props.projects[index].title}</Title>
          <Subtitle>{props.projects[index].subtitle}</Subtitle>
          <Description>{props.projects[index].description} </Description>
          <Button href={props.projects[index].link}>
            {props.projects[index].linkTitle}
          </Button>
        </ProjectCover>
        <HideWhenSmall>
          <button style={buttonStyle} onClick={increment}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </button>
        </HideWhenSmall>
      </CarouselContainer>
    </div>
  );
}

Carousel.propTypes = {
  projects: PropTypes.array.isRequired,
};
export default Carousel;
