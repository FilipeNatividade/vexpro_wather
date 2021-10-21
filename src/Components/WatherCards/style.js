import styled from "styled-components";

export const Container = styled.div`
  background-color: #e5e9f9;
  border-radius: 12px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.4);
  margin: 25px auto;
  padding: 10px;
  position: relative;
  width: 100%;
  @media only screen and (min-width: 600px) {
    column-count: 2;
    column-rule: 2px solid rgba(0, 0, 0, 0.2);
  }
`;

export const TextsValue = styled.div`
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  margin: 15px 0;
  width: 85%;
  @media only screen and (min-width: 600px) {
    margin: 0;
    width: 100%;
  }
`;

export const DeleteBnt = styled.button`
align-items: center;
background-color: #fff;
border-radius: 50%;
color: #ff0000;
display: flex;
justify-content: center;
position: absolute;
margin: -20px 0 0 -20px;
.icon{
  height: 25px;
}
`
