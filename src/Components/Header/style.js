import styled from "styled-components";

export const Container = styled.header`
  background-color: #e5e9f9;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  color: #2e3a6a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media only screen and (min-width: 800px) {
    align-items: center;
    flex-direction: row;
    height: 150px;
    justify-content: space-between;
    padding: 0 25px;
  }
`;

export const Logo = styled.img`
  height: 150px;
  margin: 25px auto;
  @media only screen and (min-width: 800px) {
    height: 100px;
    margin: 0;
  }
`;

export const Infos = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  margin-bottom: 25px;
  width: 100%;
  @media only screen and (min-width: 400px) and (max-width: 799px) {
    justify-content: flex-end;
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 800px) {
    justify-content: flex-end;
    height: 90%;
    margin: 0;
    width: 50%;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 3px solid #2e3a6a;
  height: 50px;
`;
export const NameUser = styled.h2`
  align-items: center;
  display: flex;
  height: 50px;
  margin: 0 15px;
`;
export const BntExit = styled.button`
  color: #2e3a6a;
  height: 50px;
  .icon {
    width: 25px;
  }
`;
