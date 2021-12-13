import React, { useEffect, useState } from "react";
import {
  Container,
  MainContainer,
  PunkContainer,
  PunkHighlight,
  PunkImage,
  PunkId,
  PunkDetails,
  PunkTitle,
  OwnerDetailsContainer,
  OwnerImageContainer,
  OwnerImage,
  OwnerDetails,
  OwnerHandle,
  OwnerName,
  OwnerLink,
  IconLink,
} from "./MainElements";
import instagramLogo from "../../images/owner/instagram.png";
import twitterLogo from "../../images/owner/twitter.png";
import moreIcon from "../../images/owner/more.png";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [selectedPunk, punkListData]);

  return (
    <>
      <Container>
        <MainContainer>
          <PunkHighlight>
            <PunkContainer>
              <PunkImage src={activePunk.image_original_url} alt="punk" />
            </PunkContainer>
          </PunkHighlight>
          <PunkDetails>
            <PunkTitle>{activePunk.name}</PunkTitle>
            <PunkId>#{activePunk.token_id}</PunkId>
          </PunkDetails>

          <OwnerDetailsContainer>
            <OwnerImageContainer>
              <OwnerImage src={activePunk.owner.profile_img_url} alt="" />
            </OwnerImageContainer>

            <OwnerDetails>
              <OwnerName>
                <div>{activePunk.owner.address} </div>
                <OwnerHandle>@cryptopunk</OwnerHandle>
              </OwnerName>
              <OwnerLink>
                <IconLink src={instagramLogo} alt="iconlink" />
              </OwnerLink>
              <OwnerLink>
                <IconLink src={twitterLogo} alt="iconlink" />
              </OwnerLink>
              <OwnerLink>
                <IconLink src={moreIcon} alt="iconlink" />
              </OwnerLink>
            </OwnerDetails>
          </OwnerDetailsContainer>
        </MainContainer>
      </Container>
    </>
  );
};

export default Main;
