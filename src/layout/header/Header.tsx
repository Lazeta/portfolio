import React, { useState } from "react";
import styled from "styled-components";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";


const headerItems = ["Home", "About me", "Projects", "Skills", "Contacts"];

export const Header = () => {

  return (
    <StyledHeader>
      <HeaderMenu menuItems={headerItems}/>
      <MobileMenu menuItems={headerItems} isOpen={false}/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: relative;
  right: 0;
  max-width: 1550px;
  width: 100%;
  margin: 0;
  min-height: 100px;
`;