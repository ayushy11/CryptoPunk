import React from "react";
import {
  HeaderContainer,
  HeaderTitle,
  LogoContainer,
  Logo,
  SearchContainer,
  SearchIconContainer,
  SearchIcon,
  SearchInput,
  HeaderItemsContainer,
  HeaderActionsContainer,
  HeaderSwitchContainer,
  SwitchIcon,
  SwtichIcon,
  LoginButton
} from "./HeaderElements";
import punkLogo from "../../images/header/cryptopunk-logo.png";
import searchIcon from "../../images/header/search.png";
import switchIcon from "../../images/header/theme-switch.png";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Logo src={punkLogo} alt="logo" />
        </LogoContainer>
        {/* <HeaderTitle>hEader</HeaderTitle> */}

        <SearchContainer>
          <SearchIconContainer>
            <SearchIcon src={searchIcon} alt="icon" />
          </SearchIconContainer>
          <SearchInput placeholder="Collection, item or user ..." />
        </SearchContainer>

        <HeaderItemsContainer>
          <p>Drops</p>
          <p>Marketplace</p>
          <p>Create</p>
        </HeaderItemsContainer>

        <HeaderActionsContainer>
          <HeaderSwitchContainer>
              <SwtichIcon src={switchIcon} alt="icon"/>
          </HeaderSwitchContainer>
        </HeaderActionsContainer>

        <LoginButton>
            GET IN
        </LoginButton>
      </HeaderContainer>
    </>
  );
};

export default Header;
