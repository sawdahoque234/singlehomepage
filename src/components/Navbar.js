import React, { useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineAlignLeft } from "react-icons/ai";
import logo from "../img/logo.svg";
const Container = styled.div`
  background-color: #4b154b;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
  justify-content: space-between;

  @media only screen and (max-width: 640px) {
    width: 95%;
  }
`;

const Left = styled.div`
  width: 60%;
  margin-top: 30px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 640px) {
    width: 40%;
  }
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  margin-top: 25px;
  align-items: center;

  justify-content: space-between;
  @media only screen and (max-width: 640px) {
    width: 60%;
  }
`;

const Logo = styled.h2`
  margin-left: -15px;
  margin-right: 30px;

  color: white;
  font-family: Slack-Circular-Pro, "Helvetica Neue", Helvetica, "Segoe UI",
    Tahoma, Arial, sans-serif;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;
const MenuRight = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  @media only screen and (max-width: 640px) {
    width: 100%;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 16px;
  font-wight: 600;
  color: white;
`;

const Button1 = styled.button`
  border: 1px solid white;
  padding: 10px 15px;
  background-color: transparent;
  color: white;
  margin-left: 30px;
  border-radius: 4px;
  cursor: pointer;
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;
const Button2 = styled.button`
  border: 1px solid white;
  padding: 10px 15px;
  background-color: white;
  color: #400d40;
  margin-left: 30px;
  border-radius: 4px;
  cursor: pointer;
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const MenuButton = styled.div`
  width: 20px;
  margin-right: 30px;
  font-size: 22px;
  font-wight: 900;
  color: white;
  cursor: pointer;
  display: none;
  @media only screen and (max-width: 640px) {
    display: block;
  }
`;
const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 70%;
  border-radius: 10px;
  padding: 10px 15px;
  background-color: #3c0e3c;
  display: none;
  z-index: 100;
  @media only screen and (max-width: 640px) {
    display: block;
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
    display: block;
  }
`;
const MobileMenu = styled.div`
  position: relative;
  padding: 10px 15px;
  list-style: none;
`;
const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 10px;
  font-size: 20px;
  font-wight: 900;
  color: red;
  cursor: pointer;
`;
const MobileMenuItem = styled.div`
  margin-right: 30px;
  font-size: 16px;
  font-wight: 600;
  color: white;
  padding: 10px;
  cursor: pointer;
`;

const Button1Mobile = styled.button`
  border: 1px solid white;
  padding: 10px 15px;
  background-color: transparent;
  color: white;
  margin: 10px;
  border-radius: 4px;
  cursor: pointer;
  @media only screen and (max-width: 640px) {
  }
`;
const Button2Mobile = styled.button`
  border: 1px solid white;
  padding: 10px 15px;
  background-color: white;
  color: #400d40;
  margin-left: 30px;
  border-radius: 4px;
  cursor: pointer;
  @media only screen and (max-width: 640px) {
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Left>
          <img src={logo} alt="" />
          <Logo>slack</Logo>
          <Menu>
            <MenuItem>Product</MenuItem>
            <MenuItem>Solutions</MenuItem>
            <MenuItem>Enterprise</MenuItem>
            <MenuItem>Resource</MenuItem>
            <MenuItem>Pricing</MenuItem>
          </Menu>
        </Left>
        <Right>
          <MenuRight>
            <MenuItem>
              <BsSearch />
            </MenuItem>
            <MenuItem>Sign in</MenuItem>
          </MenuRight>
          <MenuButton onClick={() => setOpen(true)}>
            <AiOutlineAlignLeft />
          </MenuButton>
          <Button1>TALK TO SALS</Button1>
          <Button2>TRY FOR FREE</Button2>
        </Right>
      </Wrapper>

      {open && (
        <MobileMenuWrapper>
          <MobileMenu>
            <CloseButton onClick={() => setOpen(false)}>X</CloseButton>
            <MobileMenuItem>Product</MobileMenuItem>
            <MobileMenuItem>Solutions</MobileMenuItem>
            <MobileMenuItem>Enterprise</MobileMenuItem>
            <MobileMenuItem>Resource</MobileMenuItem>
            <MobileMenuItem>Pricing</MobileMenuItem>
            <Button1Mobile>TALK TO SALS</Button1Mobile>
            <Button2Mobile>TRY FOR FREE</Button2Mobile>
          </MobileMenu>
        </MobileMenuWrapper>
      )}
    </Container>
  );
};

export default Navbar;
