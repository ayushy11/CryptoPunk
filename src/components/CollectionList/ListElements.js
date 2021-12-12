import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  overflow: scroll;
  cursor: pointer;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #fff;

  ::-webkit-scrollbar {
    display: none;
  }
`;
