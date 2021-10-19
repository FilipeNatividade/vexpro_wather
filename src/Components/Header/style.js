import styled from "styled-components";

export const Container = styled.header`
  background-color: #e5e9f9;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  color: #2e3a6a;
  display: flex;
  height: 150px;
  justify-content: space-between;
  padding: 25px;
  width: 100%;
`;

export const Infos = styled.div`
  align-items: flex-end;
  display: flex;
  height: 100%;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 3px solid #2e3a6a;
  height: 50px;
  margin: 0 15px;
`;
export const NameUser = styled.h2`
  align-items: center;
  display: flex;
  height: 50px;
`;
export const BntExit = styled.button`
  color: #2e3a6a;
  height: 50px;
  .icon {
    width: 25px;
  }
`;

export const Logo = styled.img`
  height: 100px;
`;
