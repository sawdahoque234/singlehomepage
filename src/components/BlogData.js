import React from "react";
import styled from "styled-components";
import img1 from "../img/img-promo-01.png";
import img2 from "../img/img-promo-02.jpg";
import img3 from "../img/img-promo-03.jpg";
import img4 from "../img/img-promo-04.jpg";
import { BsArrowRight } from "react-icons/bs";

const Container = styled.div`
  background-color: #f7f2f7;
  padding-bottom: 50px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: auto;
  }
`;
const Wrapper = styled.div`
  color: white;
  width: 80%;
  margin: auto;
  @media only screen and (max-width: 640px) {
    width: 90%;
  }
`;
const H1 = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-top: 30px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 20px;
  }
`;
const MainDiv = styled.div`
  display: grid;
  gap: 1rem;
  column-gap: 1rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding-top: 30px;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media only screen and (max-width: 640px) {
    font-size: 20px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media only screen and (max-width: 480px) {
    font-size: 20px;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Card1 = styled.div`
  height: 360px;
  background-color: #400d40;
  color: white !important;
  padding: 8px;
  margin: auto;
  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
const Card = styled.div`
  height: 360px;
  padding: 8px;
  color: black;
  background-color: white;
  margin: auto;
`;
const P1 = styled.h1`
  padding-top: 10px;
  font-size: 20px;
  font-wight: 500;
`;
const Tag = styled.p`
  margin-top: 12px;
`;

const LinkTag1 = styled.p`
  display: flex;
  padding-top: 55px;
  justify-content: space-between;
  color: white !important
  margin: auto;
  align-items: center;
`;
const LinkTag2 = styled.p`
  color: #4285f4;
  display: flex;
  padding-top: 40px;
  justify-content: space-between;

  margin: auto;
  align-items: center;
`;
const LinkTag3 = styled.p`
  color: #4285f4;
  display: flex;
  padding-top: 25px;
  justify-content: space-between;

  margin: auto;
  align-items: center;
`;
const Title = styled.span`
  font-size: 12px;
`;
const ArrowIcon = styled.span`
  padding-top: 10px;
  font-size: 20px;
`;

const BlogData = () => {
  return (
    <Container>
      <H1>Take a deeper dive into a new way to work</H1>
      <Wrapper>
        <MainDiv>
          <Card1>
            <Tag>Resource</Tag>
            <P1>Slack as your digital HQ</P1>

            <img src={img1} alt="" />
            <LinkTag1>
              {" "}
              <Title>READ MORE </Title>
              <ArrowIcon>
                {" "}
                <BsArrowRight />
              </ArrowIcon>
            </LinkTag1>
          </Card1>
          <Card>
            <img src={img2} alt="" />
            <Tag>Resource</Tag>
            <P1>
              See how other are <br /> building their digital HQ
            </P1>
            <LinkTag2>
              {" "}
              <Title>READ MORE </Title>
              <ArrowIcon>
                {" "}
                <BsArrowRight />
              </ArrowIcon>
            </LinkTag2>
          </Card>
          <Card>
            <img src={img3} alt="" />
            <Tag>Webiner</Tag>
            <P1>
              Embracing a digital-first <br /> approach to work
            </P1>
            <LinkTag2>
              {" "}
              <Title>WATCH NOW </Title>
              <ArrowIcon>
                {" "}
                <BsArrowRight />
              </ArrowIcon>
            </LinkTag2>
          </Card>
          <Card>
            <img src={img4} alt="" />
            <Tag>Resource</Tag>
            <P1>
              Reinventing work:new <br />
              imperatives for the <br /> future of working
            </P1>
            <LinkTag3>
              {" "}
              <Title>GET E-BOOK </Title>
              <ArrowIcon>
                {" "}
                <BsArrowRight />
              </ArrowIcon>
            </LinkTag3>
          </Card>
        </MainDiv>
      </Wrapper>
    </Container>
  );
};

export default BlogData;
