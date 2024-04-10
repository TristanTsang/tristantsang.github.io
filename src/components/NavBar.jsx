import React, { useState } from "react";
import {
  NavBarContainer,
  LeftContainer,
  RightContainer,
  NavBarItem,
  NavBarMenuButton,
  NavBarInnerContainer,
  NavBarExtendedContainer,
  NavBarTitle,
  ExtendedNavBarItem,
} from "../styles/NavBar.style";

function NavBar() {
  const [extendNavBar, setExtendNavBar] = useState(false);

  return (
    <NavBarContainer>
      <NavBarInnerContainer>
        <LeftContainer>
          <NavBarTitle
            target="_blank"
            href="https://www.linkedin.com/in/tristan-tsang-64bb31262/"
          >
            TRISTAN TSANG
          </NavBarTitle>
        </LeftContainer>
        <RightContainer>
          <NavBarMenuButton
            onClick={() => {
              setExtendNavBar((curr) => !curr);
            }}
          >
            {extendNavBar ? <>&#10005;</> : <>&#8801;</>}
          </NavBarMenuButton>
          <NavBarItem href="#home">HOME</NavBarItem>
          <NavBarItem href="#about">ABOUT</NavBarItem>
          <NavBarItem href="#project">PROJECTS</NavBarItem>
          <NavBarItem href="#contact">CONTACT</NavBarItem>
        </RightContainer>
      </NavBarInnerContainer>
      {extendNavBar && (
        <NavBarExtendedContainer>
          <ExtendedNavBarItem href="#home">HOME</ExtendedNavBarItem>
          <ExtendedNavBarItem href="#about">ABOUT</ExtendedNavBarItem>
          <ExtendedNavBarItem href="#project">PROJECTS</ExtendedNavBarItem>
          <ExtendedNavBarItem href="#contact">CONTACT</ExtendedNavBarItem>
        </NavBarExtendedContainer>
      )}
    </NavBarContainer>
  );
}
export default NavBar;
