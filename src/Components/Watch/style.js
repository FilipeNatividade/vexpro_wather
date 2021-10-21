import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #e5e9f9;
  border-radius: 50%;
  border: 5px solid #2c3963;
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  height: 250px;
  justify-content: center;
  margin: 0 auto 50px;
  width: 250px;
  .hour {
    font-size: 100px;
  }
  .min {
    font-size: 75px;
    margin-top: -30px;
  }
  .sec {
    font-size: 50px;
  }
  .date {
    font-size: 26px;
    margin-bottom: 25px;
  }

  @media only screen and (min-width: 800px) {
    margin: 0;
  }
`;
