import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import axios from "axios";

import CollectionList from "./components/CollectionList";

const AppContainer = styled.div`
  background-color: #000;
  padding: 20px;
  min-height: 100vh;
  max-width: 100vw;
`;

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getNfts = async () => {
      const openseadata = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x37d039241C66Ba9d59dBe927e63878d814cD3A5F&order_direction=asc"
      );
      setPunkListData(openseadata.data.assets);
    };
    return getNfts();
  }, []);

  return (
    <>
      <AppContainer>
        <Header />
        
        <CollectionList punkListData={punkListData} />
      </AppContainer>
    </>
  );
}

export default App;
