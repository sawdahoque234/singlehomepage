import React from "react";
import styled from "styled-components";
import { FaRegBuilding } from "react-icons/fa";
import { BsFillLockFill } from "react-icons/bs";
import { GiSpookyHouse } from "react-icons/gi";
import { IoMdLaptop } from "react-icons/io";
import customerreview from "../video/customerreview.mp4";
import { BsArrowRight } from "react-icons/bs";

const Container = styled.div`
  background-color: white;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Wrapper = styled.div`
  align-items: center;
  color: white;
  width: 80%;
  margin: auto;
  padding: 40px 0px;

  justify-content: space-between;

 
`;

const FirstDiv = styled.div`
  width: 70%;
  margin: auto;
  padding-bottom: 30px;

  @media only screen and (max-width: 640px) {
    width: 90%;
  }
`;

const H1 = styled.h1`
  color: black;
  margin: auto;
  padding-top: 40px;
  display: flex;
  font-size: 40px;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 20px;
  }
`;
const P = styled.p`
  display: flex;
  margin: auto;
  padding-top: 20px;
  font-wight: 500;
  justify-content: center;
  color: black;
`;
const Div = styled.div`
  display: flex;
  margin: auto;
  padding-top: 20px;
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
  @media only screen and (max-width: 640px) {
    padding: 8px 10px;
    margin-bottom: 20px;
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
    padding: 8px 10px;
    margin-bottom: 20px;
  }
`;
const BuildingIcon = styled.span`
  margin: auto;
  color: gray;
  padding: 10px;
  margin-left: -60px;
  margin-bottom: 20px;
  border-radius: 20%;
  background-color: #f5fbfc;
  font-size: 22px;
  box-shadow: 2px 2px gray, -1em 0 0.4em white;
`;
const HouseIcon = styled.span`
  margin: auto;
  color: #2bc9e3;
  padding: 10px;
  margin-right: -60px;
  border-radius: 20%;
  background-color: #f5fbfc;
  font-size: 22px;
  box-shadow: 1px 1px gray, -1em 0 0.4em white;
`;
const HouseIconNum = styled.span`
  color: gray !important;
`;
const LockIcon = styled.span`
  margin: auto;
  color: orange;
  padding: 10px;
  margin-left: -20px;
  margin-bottom: 20px;
  border-radius: 20%;
  background-color: #f5fbfc;
  font-size: 22px;
  box-shadow: 1px 1px gray, -1em 0 0.4em white;
`;
const LockIconNum = styled.span`
  color: gray !important;
`;
const LaptopIcon = styled.span`
  margin: auto;
  color: gray;
  padding: 10px;
  margin-right: -20px;
  border-radius: 20%;
  background-color: #f5fbfc;
  font-size: 22px;
  box-shadow: 1px 1px gray, -1em 0 0.4em white;
`;
const TopIcon = styled.span`
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const BottomIcon = styled.span`
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const SecondDiv = styled.div`
  width: 80%;
  padding-bottom: 40px;
  margin: auto;

  @media only screen and (max-width: 640px) {
    width: 100%;
  }
`;

const ScuessDiv = styled.ul`
  display: flex;
  color: black;
  justify-content: space-between;
  list-style: none;

  
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const SingleDiv = styled.h6`
  margin-right: 30px;
  font-size: 14px;
  font-wight: 800;
  color: #000;
`;
const SingleDivNum = styled.h1`
  font-size: 56px;
  font-wight: 800;
  color: #400d40;
  @media only screen and (max-width: 640px) {
    font-size: 40px;
  }
`;

const ThirdDiv = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 95%;
  margin: auto;
  justify-content: space-between;
  margin-bottom: 40px;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
    height: auto;
  }

`;
const Left = styled.div``;
const Right = styled.div`
  color: black;
  width: 65%;

  @media only screen and (max-width: 640px) {
    width: 95%;
  }
`;
const P1 = styled.p`
  padding-top: 10px;
  font-size: 22px;
  font-wight: 300;
  line-height: 35px;
  font-style: italic;
  color: black;
`;
const Video = styled.video`
  margin-top: 50px;
  border-top-right-radius: 500px;
  border-bottom-right-radius: 500px;
  width: 90%;
  height: 100%;
`;
const Author = styled.h4`
  margin-top: 20px;
  color: black;
`;
const Post = styled.p`
  margin-top: 10px;
  color: black;
  font-wight: 200;
  font-size: 15px;
`;
const LinkTag = styled.p`
  margin-top: 10px;
  color: #4285f4;
`;
const ArrowIcon = styled.span`
  color: red;
  color: #4285f4;
  margin-top: 3px;
  margin-left: 10px;
  font-size: 20px;
  position: absolute; ;
`;
const P3 = styled.p`
  padding-top: 10px;
  font-size: 12px;
  font-wight: 200;
  color: black;
  padding-bottom: 40px;
  display: flex;
  margin: auto;
  justify-content: center;
`;
const Teams = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <FirstDiv>
            <TopIcon>
              <BuildingIcon>
                <FaRegBuilding /> 11
              </BuildingIcon>
              <HouseIcon>
                <GiSpookyHouse />
                <HouseIconNum>12</HouseIconNum>
              </HouseIcon>
            </TopIcon>
            <H1>Teams large and small rely on Slack</H1>
            <P>
              Slack securely scales up to support collaboration at the world’s
              biggest companies.
            </P>
            <Div>
              <Button1> MEET SLACK FOR ENTERPRISE</Button1>
              <Button2> TALK TO SALES</Button2>
            </Div>
            <BottomIcon>
              <LockIcon>
                <BsFillLockFill />
                <LockIconNum>27</LockIconNum>
              </LockIcon>

              <LaptopIcon>
                <IoMdLaptop />
                12
              </LaptopIcon>
            </BottomIcon>
          </FirstDiv>
          <SecondDiv>
            <ScuessDiv>
              <SingleDiv>
                <SingleDivNum>85%</SingleDivNum>
                of users say Slack has <br />
                improved <br /> communication*
              </SingleDiv>
              <SingleDiv>
                <SingleDivNum>86%</SingleDivNum>
                feel their ability to work <br /> remotely has improved*
              </SingleDiv>
              <SingleDiv>
                <SingleDivNum>88%</SingleDivNum>
                feel more connected to <br /> their teams*
              </SingleDiv>
            </ScuessDiv>
          </SecondDiv>
        </Wrapper>
        <ThirdDiv>
          <Left>
            <Video loop autoPlay muted controls="">
              <source src={customerreview} type="video/webm" />
            </Video>
          </Left>
          <Right>
            <P1>
              ‘We were able to create a large virtual network of employees that
              can communicate as though they are together. There was a lot of
              disruption in terms of where we worked, but in terms of how we
              worked – very little disruption.’
            </P1>
            <Author>Mark Smith</Author>
            <Post>Senior Technical Product Manager, T-Mobile</Post>
            <LinkTag>
              {" "}
              See more customer stories{" "}
              <ArrowIcon>
                {" "}
                <BsArrowRight />
              </ArrowIcon>
            </LinkTag>
          </Right>
        </ThirdDiv>
        <P3>
          {" "}
          * Weighted average. Based on 2,707 survey responses from weekly Slack
          users in the US, UK, Australia and Canada with a ± 2% margin of error
          at 95% CI (December 2021).
        </P3>
      </Container>
    </div>
  );
};

export default Teams;
