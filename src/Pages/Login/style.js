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
    margin-bottom: 25px;
  }
`;

export const Logo = styled.img`
  width: 125px;
`;

export const Content = styled.div`
  align-items: center;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  padding-bottom: 0;
  max-width: 370px;
  width: 100%;
`;

export const ButtonLogin = styled.button`
  background-color: ${(props) => props.color};
  border-radius: 8px;
  color: #fff;
  font-size: 15px;
  font-weight: bolder;
  padding: 10px 0;
  margin-bottom: 25px;
  text-align: left;
  max-width: 350px;
  width: 100%;
  .icon {
    width: 40px;
    margin: 0 25px;
  }
`;
