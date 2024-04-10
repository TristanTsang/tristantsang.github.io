import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: white;
`;

export const InnerContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContainerSection = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: start;
  padding-bottom: 10%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  padding-top: 10%;
  padding-bottom: 20px;
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Inter Tight";
  text-decoration: none;
`;

export const Description = styled.div`
  color: #555555;
  font-size: 1rem;
  font-family: "Inter Tight";
  text-decoration: none;
`;

export const SkillItem = styled.div`
  color: #666666;
  background: #f2f2f2;
  padding: 1rem;
  text-align: center;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Inter Tight";
  text-decoration: none;
`;

export const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 15px;
`;

export const Button = styled.a`
  background-color: rgb(119, 19, 191);
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-color: transparent;
  padding: 1rem;
  margin-top: 2rem;
  width: 11rem;
  border-radius: 2.5px;
  margin-right: auto;
  cursor: pointer;
  font-family: "Inter Tight";
  @media (max-width: 800px) {
    width: 67vw;
    margin-left: auto;
    margin-right: auto;
  }
  margin-bottom: 1rem;
`;
