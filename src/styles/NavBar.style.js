import styled from "styled-components";

export const NavBarContainer = styled.nav`
  width: 100%;
  height: "80px";
  position: fixed;
  top: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

export const NavBarInnerContainer = styled.div`
  width: 100;
  height: 80px;
  display: flex;
`;
export const NavBarExtendedContainer = styled.div`
  width: 100%;
  top: 80px;
  align-items: end;
  left: 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1000;
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 50px;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5%;
  padding-left: 50px;
`;

export const NavBarItem = styled.a`
  color: black;
  font-size: 1rem;
  font-family: "Inter Tight";
  font-weight: bold;
  margin: 10px;
  letter-spacing: +3px;
  text-decoration: none;
  @media (max-width: 699px) {
    display: none;
  }
  &:hover {
    color: rgb(119, 19, 191);
  }
`;
export const ExtendedNavBarItem = styled.a`
  color: black;
  font-size: 1rem;
  font-family: "Inter Tight";
  font-weight: bold;
  letter-spacing: +2;
  margin: 10px;
  text-decoration: none;
  &:hover {
    color: rgb(119, 19, 191);
  }
`;

export const NavBarTitle = styled.a`
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Inter Tight";
  margin: 10px;
  text-decoration: none;
  &:hover {
    color: rgb(119, 19, 191);
  }
`;

export const NavBarLinkContainer = styled.div`
  display: flex;
`;

export const NavBarMenuButton = styled.button`
  width: 70px;
  height: 60px;
  background: none;
  border: none;
  color: black;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;
