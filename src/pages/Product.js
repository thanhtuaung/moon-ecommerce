import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 60%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1``;

const Price = styled.h1`
  font-weight: 400;
  margin-top: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SelectorContainer = styled.div`
  display: flex;
`;

const Selector = styled.div``;

const SubTitle = styled.h3`
  margin-bottom: 10px;
`;

const SelectorItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SelectorItem = styled.div`
  border: 2px solid #${(props) => props.borderColor};
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: #${(props) => props.borderColor};
    color: white;
  }
`;

const ItemCountContainer = styled.div`
  margin: 20px 0px;
`;

const QtyChanger = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid teal;
  border-radius: 5px;
  cursor: pointer;
`;

const Count = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid teal;
  border-radius: 5px;
  font-weight: 600;
  margin: 0px 10px;
`;

const AddToCardButton = styled.div`
  margin: 10px 0px;
  width: 40%;
  background-color: teal;
  padding: 10px 30px;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/hcwpqSJ/dress.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Yellow Dress</Title>
          <Price>$30</Price>
          <Desc>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words.
          </Desc>
          <Selector>
            <SubTitle>Color</SubTitle>
            <SelectorItemContainer>
              <SelectorItem borderColor="ebcc34">yellow</SelectorItem>
              <SelectorItem borderColor="de2814">red</SelectorItem>
              <SelectorItem borderColor="080707">black</SelectorItem>
              <SelectorItem borderColor="22b015">green</SelectorItem>
            </SelectorItemContainer>
          </Selector>
          <Selector style={{ marginTop: 20 }}>
            <SubTitle>Size</SubTitle>
            <SelectorItemContainer>
              <SelectorItem borderColor="000">XS</SelectorItem>
              <SelectorItem borderColor="000">S</SelectorItem>
              <SelectorItem borderColor="000">M</SelectorItem>
              <SelectorItem borderColor="000">L</SelectorItem>
              <SelectorItem borderColor="000">XL</SelectorItem>
            </SelectorItemContainer>
          </Selector>

          <ItemCountContainer>
            <SubTitle>Quantity</SubTitle>
            <QtyChanger>
              <Button>-</Button>
              <Count>1</Count>
              <Button>+</Button>
            </QtyChanger>
          </ItemCountContainer>
          <AddToCardButton>Add To Cart</AddToCardButton>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
