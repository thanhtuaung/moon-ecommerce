import {
  Email,
  Facebook,
  Instagram,
  LocationOnSharp,
  Phone,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContiner = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 0px 30px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MOON.</Logo>
        <Desc>
          ontrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature
        </Desc>
        <SocialContiner>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContiner>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Categories</ListItem>
          <ListItem>New Products</ListItem>
          <ListItem>Popular Products</ListItem>
          <ListItem>Cart Page</ListItem>
          <ListItem>Order Page</ListItem>
          <ListItem>Payment</ListItem>
          <ListItem>Delievery</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnSharp style={{ marginRight: 10 }} />
          PathainGyi, Mandalay.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: 10 }} />
          +959 253 599 770
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: 10 }} />
          thanhtoo2126@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
