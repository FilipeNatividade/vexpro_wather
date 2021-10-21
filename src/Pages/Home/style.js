import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(#7990ea, #e5e9f9);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const ContaiComponents = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 25px;
  @media only screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  @media only screen and (min-width: 700px) {
    width: 65%;
  }
  @media only screen and (min-width: 1000px) {
    width: 70%;
  }
`;
