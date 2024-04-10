import styled from "styled-components";
import background from "../assets/background.jpg";
export const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  flex-direction: column;
  background-image: url("../assets/background.jpg");
`;

export const InnerContainer = styled.div`
  padding: 2.5%;
  margin-top: 10vh;
  border-radius: 2.5px;
  margin-bottom: 10vh;
  margin-right: 5%;
  margin-left: 5%;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background-color: white;
  flex-direction: column;
`;

export const Label = styled.div`
  color: #555555;
  font-size: 0.8rem;
  margin-right: auto;
  font-weight: bold;
  font-family: "Inter Tight";
  text-decoration: none;
  margin-bottom: 1rem;
`;

export const InputBox = styled.input`
  background-color: #f2f2f2;
  color: #666666;
  font-size: 1rem;
  width: 40vw;
  border-color: transparent;
  padding: 1rem;
  border-radius: 5px;
  font-family: "Inter Tight";
  @media (max-width: 699px) {
    width: 80vw;
  }
  margin-bottom: 2rem;
`;

export const TextArea = styled.textarea`
  background-color: #f2f2f2;
  color: #666666;
  font-size: 1rem;
  width: 40vw;
  border-color: transparent;
  padding: 1rem;
  border-radius: 5px;
  font-family: "Inter Tight";
  @media (max-width: 699px) {
    width: 80vw;
  }
  resize: none;
  margin-bottom: 2rem;
`;

export const Button = styled.input`
  background-color: rgb(119, 19, 191);
  color: white;
  font-size: 1rem;
  margin-left: auto;
  position: static;
  font-weight: bold;
  width: 11rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-color: transparent;
  padding: 1rem;
  border-radius: 2.5px;
  font-family: "Inter Tight";
  @media (max-width: 699px) {
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }
  cursor: pointer;
  margin-bottom: 1rem;
`;
