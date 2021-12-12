import styled from "styled-components";

export const CardContainer = styled.div`
  color: #fff;
  background-color: #1a1c1e;
  border-radius: 20px;
  overflow: hidden;
  width: 300px;
  height: 500px;
  margin-right: 30px;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardDetails = styled.div`
  padding: 20px;
`;

export const CardName = styled.div`
  font-size: 20px;
  font-weight: 900;
`;

export const CardId = styled.div`
  color: #a1a5b0;
  font-size: 18px;
  font-weight: 600;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  object-fit: contain;
`;

export const PriceImage = styled.img`
  height: 23px;
  width: 15px;
`;

export const Price = styled.div`
  margin-left: 5px;
  font-weight: 600;
`;
