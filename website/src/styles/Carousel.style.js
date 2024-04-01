import styled from "styled-components";

export const ProjectCover = styled.div`
  background-color: white;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin: 1rem;
  box-shadow: 0px 5px 20px rgba(256, 256, 256, 0.5);
  border-radius: 2.5px;
`;

export const ProjectImage = styled.img`
  background-color: white;
  width: 35vw;
  height: 20vw;
  align-items: center;
  flex-direction: column;
  display: flex;
  object-fit: cover;
  @media (max-width: 499px) {
    width: 67vw;
    height: 45vw;
  }
`;
export const CarouselContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
export const Title = styled.div`
  margin-right: auto;
  padding-top: 1rem;
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Inter Tight";
  text-decoration: none;
`;
export const Subtitle = styled.div`
  margin-right: auto;
  text-align: left;
  color: #555555;
  font-size: 1rem;
  padding-bottom: 1rem;
  font-family: "Inter Tight";
  text-decoration: none;
`;
export const Button = styled.a`
  background-color: rgb(119, 19, 191);
  color: white;
  font-size: 1rem;
  margin-left: auto;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  width: 11rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-color: transparent;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 2.5px;
  font-family: "Inter Tight";
  @media (max-width: 499px) {
    width: 67vw;
    margin-left: 0;
    display: none;
  }
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const HideWhenSmall = styled.div`
  @media (max-width: 499px) {
    display: none;
  }
`;
export const HideWhenBig = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 2rem;
  flex-direction: row;
  margin-left: 1rem;
  margin-right: 1rem;
  @media (min-width: 500px) {
    display: none;
  }
`;

export const Description = styled.div`
  width: 35vw;
  text-align: left;
  color: black;
  font-size: 1rem;
  font-family: "Inter Tight";
  margin-bottom: 1rem;
  text-decoration: none;
  @media (max-width: 499px) {
    width: 66.5vw;
  }
`;
