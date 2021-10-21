import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  font-size: 30px;
  font-weight: bolder;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  margin-bottom: 25px;
  width: 100%;
  @media only screen and (min-width: 500px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 700px) {
    height: 250px;
    width: 90%;
  }
  @media only screen and (min-width: 800px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  width: 100%;
  @media only screen and (min-width: 500px) {
    width: 150px;
  }
`;

export const ContainInpBtn = styled.div`
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  height: 35px;
  border-radius: 8px;
  font-size: 22px;
  padding: 0 15px;
  width: 100%;
`;

export const BntSearch = styled.button`
  border: 2px solid #2c3963;
  border-radius: 5px;
  height: 35px;
  padding: 3px;
  margin-left: 10px;
  width: 35px;
  .icon {
    color: #2e3a6a;
  }
`;
