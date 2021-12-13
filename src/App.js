import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import axios from "axios";

import CollectionList from "./components/CollectionList";
import Main from "./components/Main";

const AppContainer = styled.div`
  background-color: #000;
  padding: 20px;
  min-height: 100vh;
  max-width: 100vw;
`;

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

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
        {punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk} />
            <CollectionList
              punkListData={punkListData}
              setSelectedPunk={setSelectedPunk}
            />
          </>
        )}
      </AppContainer>
    </>
  );
}

export default App;
