import React from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

const Container = styled.div`
  background-color: white;
  color: black;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: auto;
  }
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    height: auto;
  }
`;
const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  @media only screen and (max-width: 640px) {
    width: 90%;
  }
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  margin: auto;
  gap: 1.5rem
  padding: 20px 0px;
  justify-content: space-between;
  padding-top: 3rem;
  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    
  }
`;
const Div2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: auto;
  gap: 1.5rem
  padding: 20px 0px;
  justify-content: space-between;
  padding-top: 3rem;
  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    
  }
`;
const ItemDiv = styled.div`

@media only screen and (max-width: 640px) {
  margin-bottom:18px
  
}

  
`;
const H6 = styled.h6`
  margin: auto;
  font-size: 16px;
`;
const Ul = styled.ul``;
const Left = styled.div`
  display: flex;
 
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;
const Li = styled.li`
  list-style: none;
  padding-top: 14px;
  font-wight: 300;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;
const LI = styled.h6`
  padding-top: 20px;
  display: flex;
  font-wight: 500;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;
const P1 = styled.p`
  padding: 20px 0px;
  margin:auto
  display: flex;
  font-wight: 300;
  font-size: 14px;
  cursor: pointer;
`;
const Footer = () => {
  const links = [
    {
      title: "WHY SLACK?",
      links: [
        "Slack vs email",
        "Chennels",
        "Engagement",
        "Scale",
        "Watch the demo",
      ],
    },

    {
      title: "PRODUCT",
      links: ["Features", "Integrations", "Enterprise", "Solutions"],
    },
    {
      title: "PRICING",
      links: ["Subscriptions", "Paid vs free"],
    },
    {
      title: "RESOURCES",
      links: [
        "Partners",
        "Developers",
        "Cmmunity",
        "Apps",
        "Blog",
        "Help Centre",
        "Events",
      ],
    },
    {
      title: "COMPANY",
      links: [
        "About us",
        "Leadership",
        "Investor relations",
        "News",
        "Media kit",
        "Careers",
      ],
    },
  ];
  return (
    <Container>
      <Wrapper>
        <Div>
          <img src={logo} alt="Footer Logo" />
          {links.map(({ title, links }) => {
            return (
              <ItemDiv className="links" key={title}>
                <H6>{title}</H6>
                <Ul>
                  {links.map((link) => (
                    <Li key={link}>{link}</Li>
                  ))}
                </Ul>
              </ItemDiv>
            );
          })}
        </Div>
        <Div2>
          <Left>
            <LI>Status</LI>
            <LI>Privacy</LI>
            <LI>Terms</LI>
            <LI>Cookie preferences</LI>
            <LI>Contact us</LI>
            <LI>Change regoin</LI>
          </Left>
          <Right>
            <LI>Download slack</LI>

            <LI>
              <FaFacebook />
            </LI>
            <LI>
              <FaTwitter />
            </LI>
            <LI>
              <FaYoutube />
            </LI>
            <LI>
              <FaLinkedin />
            </LI>
          </Right>
        </Div2>
        <P1>
          {" "}
          ©2022 Slack Technologies, LLC, a Salesforce company. All rights
          reserved. Various trademarks held by their respective owners.
        </P1>
      </Wrapper>
    </Container>
  );
};

export default Footer;
