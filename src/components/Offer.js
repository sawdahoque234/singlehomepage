import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #4a154b;
  border: none;
  clip-path: ellipse(75% 100% at center top);
  height: auto;
  min-height: 370px;

  @media only screen and (max-width: 640px) {
    
    min-height: 260px;
  }

  @media only screen and (max-width: 480px) {
    
    min-height: 210px;
  }

`;

const H1 = styled.h1`
  font-size: 40px;
  display: flex;
  color: white;
  align-items: center;
  margin: auto;
  padding-top: 70px;
  justify-content: center;

  @media only screen and (max-width: 640px) {
    font-size: 25px;
  }
  
  @media only screen and (max-width: 480px) {
    font-size: 22px;
  }
`;
const Div = styled.div`
  display: flex;
  margin: auto;
  padding-top: 30px;
  font-wight: 500;
  justify-content: center;
  color: black;
`;
const Button1 = styled.button`
  padding: 18px 18px;
  background-color: #400d40;
  color: white;
  border-radius: 4px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border: 2px solid white;
  margin-left: 20px;

  @media only screen and (max-width: 640px) {
    padding: 8px 12px;
    margin-left: 10px;
  }

  @media only screen and (max-width: 480px) {
    padding: 8px 12px;
    
  }
`;
const Button2 = styled.button`
  padding: 18px 20px;
  color: #400d40;
  border-radius: 4px;
  font-weight: 400;
  border: 1px solid #400d40;
  cursor: pointer;
  margin-left: 10px;
  background-color: white;

  @media only screen and (max-width: 640px) {
    padding: 10px 12px;
  
  }

  @media only screen and (max-width: 480px) {
    padding: 10px 12px;
    
  }
`;
const Offer = () => {
  return (
    <Container>
      <H1>Welcome to your new digital HQ.</H1>

      <Div>
        <Button2> TRY FOR FREE</Button2>
        <Button1> TALK TO SALES</Button1>
      </Div>
    </Container>
  );
};

export default Offer;
