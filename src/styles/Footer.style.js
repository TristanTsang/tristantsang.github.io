import styled from "styled-components";

export const FooterContainer = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: black;
  color: white;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const LinksContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row; /* Align children in a row */
  gap: 30px;
  width: 50%;
  @media (max-width: 600px) {
    padding-top: 1rem;
    width: 100%;
  }
`;

export const Header = styled.div`
  color: white;
  font-size: 1.5rem;
  padding-bottom: 20px;
  font-weight: 600;
  font-family: "Inter Tight";
  text-decoration: none;
`;

export const Description = styled.div`
  color: white;
  font-size: 0.8rem;
  font-family: "Inter Tight";
  text-decoration: none;
`;

export const Divider = styled.div`
  background-color: #a9a9a9;
  margin-top: 2rem;
  margin-bottom: 1rem;
  height: 1px;
  width: 80%;
  margin-left: 10%;
`;
