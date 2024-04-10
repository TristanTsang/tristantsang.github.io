import styled from "styled-components";
import background from "../assets/background.jpg";
export const IntroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover;
  justify-content: center;
  background-position: center;
  flex-direction: column;
  background-image: url(assets/background.jpg);

  @media (max-width: 699px) {
    height: 67vh;
  }
`;

export const Header = styled.div`
  font-family: "Inter Tight";
  color: black;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
`;

export const Description = styled.div`
  font-family: "Inter Tight";
  color: black;
  font-size: 1.75rem;
  margin-top: 20px;
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
`;

export const Button = styled.a`
  background-color: rgb(119, 19, 191);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 20vw;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-color: transparent;

  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 2.5px;
  font-family: "Inter Tight";
  @media (max-width: 699px) {
    width: 67vw;
  }
  cursor: pointer;
`;
