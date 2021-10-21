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
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  padding-bottom: 0;
  max-width: 330px;
  width: 100%;
  a {
    color: #2e3a6a;
    font-weight: bolder;
    margin-bottom: 25px;
    text-decoration: none;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const Inputs = styled.input`
  border-radius: 8px;
  font-size: 20px;
  height: 50px;
  max-width: 350px;
  margin-bottom: 10px;
  padding: 0 15px;
  width: 100%;
`;

export const RegisterBtn = styled.input`
  background-color: #3b5998;
  border-radius: 8px;
  color: #fff;
  font-size: 22px;
  font-weight: bolder;
  height: 50px;
  margin: 25px auto;
  max-width: 350px;
  text-align: center;
  width: 100%;
`;
