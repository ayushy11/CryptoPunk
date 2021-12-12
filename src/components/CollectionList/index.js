import React from "react";
import CollectionCard from "../CollectionCard";
import { ListContainer } from "./ListElements";

const CollectionList = ({ punkListData }) => {
  return (
    <>
      <ListContainer>
        {punkListData?.map((punk) => (
          <div>
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_original_url}
            />
          </div>
        ))}
      </ListContainer>
    </>
  );
};

export default CollectionList;
