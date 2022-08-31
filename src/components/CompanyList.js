import React from "react";
import styled from "styled-components";
import img1 from "../img/logo-seek.png";
import img2 from "../img/logo-xero.png";
import img3 from "../img/rea.png";
import img4 from "../img/rmit.png";
import img5 from "../img/ibm.png";
import img6 from "../img/deliveroo.png";
import demo1 from "../video/connectedness.webm";
import demo2 from "../video/flexibility.webm";
import demo3 from "../video/speed.webm";
import { BsArrowRight } from "react-icons/bs";
const Container = styled.div`
  background-color: #F4ECE8;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Wrapper = styled.div`
  align-items: center;
  color: white;
  width: 80%;
  margin: auto;
  justify-content: space-between;
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap:1rem;
  align-items: center;
  width: 70%;
  margin: auto;
  justify-content: space-between;

  @media only screen and (max-width: 640px) {
    width: 100%;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    
  }
`;
const H5 = styled.h5`
  color: black;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 20px;
  }
`;
const Design = styled.div`
  align-items: center;
  margin: auto;
  padding-bottom: 50px;

  justify-content: space-around;
`;
const Left = styled.div`
  width: 50%;
  margin-top: 20px;
  @media only screen and (max-width: 640px) {
    width: 100%;
    height: 100%;
  }
`;
const Right = styled.div`
  width: 50%;
  margin-top: 50px;
  height: 100%;
  @media only screen and (max-width: 640px) {
      width: 100%;
      height: 100%;  
  }
`;
const DesignDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
}
`;

const DesignDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;

  @media only screen and (max-width: 640px) {
    flex-direction: column-reverse;
}
`;
const Title = styled.h1`
  font-size: 50px;
  color: black;

  @media only screen and (max-width: 640px) {
    font-size: 25px;
}
`;
const Description = styled.p`
  margin: 10px;
  color: black;
  width: 66%;
  line-height: 20px;

  @media only screen and (max-width: 640px) {
    font-size: 14px;
    width: 100%;
    margin: 5px 0px;
}

`;
const Video = styled.video`
  margin-top: 30px;
  width: 80%;
  height: 100%;
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

const CompanyList = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div>
      <Container>
        <Wrapper>
          <H5> TRUSTED BY COMPANIES ALL OVER THE WORLD</H5>
          <Div>
            {images.map((img) => (
              <div style={{padding:'0px 10px', width:"70px" }}><img src={img} alt="" /></div>
              
            ))}
          </Div>
          {/* *********design*************** */}
          <Design>
            <DesignDiv>
              <Left>
                <Video loop autoPlay muted controls="">
                  <source src={demo1} type="video/webm" />
                </Video>
              </Left>
              <Right>
                <Title>Bring your team together </Title>
                <Description>
                  {" "}
                  At the heart of Slack are channels: organised spaces for
                  everyone and everything that you need for work. In channels,
                  it’s easier to connect across departments, offices, time zones
                  and even other companies.
                  <LinkTag>
                    {" "}
                    Learn more about channels{" "}
                    <ArrowIcon>
                      {" "}
                      <BsArrowRight />
                    </ArrowIcon>
                  </LinkTag>
                </Description>
              </Right>
            </DesignDiv>
            <DesignDiv2>
              <Left>
                <Title>
                  Choose how you want to work{" "}
                </Title>
                <Description>
                  {" "}
                  In Slack, you’ve got all the flexibility to work when, where
                  and how it’s best for you. You can easily chat, send audio and
                  video clips, or join a huddle to talk things through live.
                  <LinkTag>
                    {" "}
                    Learn more about channels{" "}
                    <ArrowIcon>
                      {" "}
                      <BsArrowRight />
                    </ArrowIcon>
                  </LinkTag>
                </Description>
              </Left>
              <Right>
                <Video loop autoPlay muted controls="">
                  <source src={demo2} type="video/webm" />
                </Video>
              </Right>
            </DesignDiv2>
            <DesignDiv>
              <Left>
                <Video loop autoPlay muted controls="">
                  <source src={demo3} type="video/webm" />
                </Video>
              </Left>
              <Right>
                <Title>Move faster with your tools in one place </Title>
                <Description>
                  {" "}
                  With your other work apps connected to Slack, you can work
                  faster by switching tabs less. And with powerful tools like
                  Workflow Builder, you can automate away routine tasks.
                  <LinkTag>
                    {" "}
                    Learn more about channels{" "}
                    <ArrowIcon>
                      {" "}
                      <BsArrowRight />
                    </ArrowIcon>
                  </LinkTag>
                </Description>
              </Right>
            </DesignDiv>
          </Design>
        </Wrapper>
      </Container>
    </div>
  );
};

export default CompanyList;
