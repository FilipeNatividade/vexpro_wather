import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-image: linear-gradient(#7990ea, #e5e9f9);
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  h1 {
    color: #2e3a6a;
    text-align: center;
    width: 100%;
    margin-top: 50px;
  }
`;

export const Content = styled.div`
  align-items: center;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  padding: 25px;
  width: 80%;
`;
export const BackBnt = styled.button`
  color: #ff0000;
  height: 50px;
  width: 50px;

`