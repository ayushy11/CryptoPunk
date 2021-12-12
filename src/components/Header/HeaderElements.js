import styled from "styled-components";

export const HeaderContainer = styled.header`
  /* border: 2px solid white; */
  color: white;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    margin: 10px;
  }
`;

export const LogoContainer = styled.div`
  /* border: 2px solid yellow; */
  color: white;
  height: 100px;
  display: flex;
`;

export const Logo = styled.img`
  max-width: 200px;
`;

export const SearchContainer = styled.div`
  /* border: 2px solid orange; */
  display: flex;
  background-color: #1c1c1e;
  height: 50px;
  flex: 1;
  border-radius: 50px;
  align-items: center;
`;

export const SearchIconContainer = styled.div`
  /* border: 2px solid green; */
  margin: 10px;
`;

export const SearchIcon = styled.img`
  max-width: 100px;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 80%;
  color: #fff;
  font-size: 1rem;
  outline: none;
`;

export const HeaderItemsContainer = styled.div`
  display: flex;
  color: #a1a5b0;

  p {
    margin: 10px;
  }
`;

export const HeaderActionsContainer = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 10px;
  }
`;

export const HeaderSwitchContainer = styled.div`
  display: flex;
  background-color: #1c1c1e;
  border-radius: 50px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

export const SwtichIcon = styled.img`
  max-width: 50px;
  height: 25px;
`;

export const LoginButton = styled.button`
  background: linear-gradient(to right, #59f9b7, #66feea);
  padding: 15px 40px;
  border-radius: 50px;
  color: black;
  cursor: pointer;
  border: none;
  font-weight: 500;

  &:hover {
    transform: scale(1.02);
    animation: textColor 2s ease infinite;
    background: linear-gradient(to right, #ff416c, #ff4b2b);
  }
`;

export const HeaderTitle = styled.h2`
  font-weight: 900;
`;
