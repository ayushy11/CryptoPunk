import styled from "styled-components";

export const Container = styled.div`
  max-height: 50vh;
`;

export const MainContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #fff;
`;

export const PunkHighlight = styled.div`
  display: flex;
  flex: 0.25;
  align-items: center;
  justify-content: center;
`;

export const PunkContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  margin-right: 20px;
`;

export const PunkImage = styled.img`
  object-fit: contain;
  max-height: 30vw;
  max-width: min(30vw, 40vh);
`;

export const PunkDetails = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0.75;
`;

export const PunkTitle = styled.h1`
  font-size: 96px;
  font-weight: 800;
`;

export const PunkId = styled.span`
  color: #a1a5b0;
  font-size: 72px;
  align-self: center;
`;

export const OwnerDetailsContainer = styled.div`
  color: #fff;
  display: flex;
  margin: 10px 0;
  height: 50px;

  div {
    margin: 0 5px;
  }
`;

export const OwnerImageContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  overflow: hidden;
  object-fit: contain;
`;

export const OwnerDetails = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const OwnerName = styled.div`
  flex: 1;
`;

export const OwnerHandle = styled.div`
  color: #00ebfe;
`;

export const OwnerImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const OwnerLink = styled.div`
  padding: 12px;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  border: 1px solid #fff;
  margin: 0 0 0 10px;
`;

export const IconLink = styled.img`
  height: 100%;
  width: 100%;
`;
