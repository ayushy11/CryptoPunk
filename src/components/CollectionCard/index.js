import React from "react";
import {
  CardContainer,
  CardImage,
  CardDetails,
  CardName,
  CardId,
  PriceContainer,
  PriceImage,
  Price,
} from "./CardElements";
import weth from "../../images/weth.png";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <>
      <CardContainer>
        <CardImage src={image} alt="img" />
        <CardDetails>
          <CardName>
            {name} <CardId>.#{id}</CardId>
          </CardName>
          <PriceContainer>
            <PriceImage src={weth} alt="eth" />
            <Price>{traits[0]?.value}</Price>
          </PriceContainer>
        </CardDetails>
      </CardContainer>
    </>
  );
};

export default CollectionCard;
