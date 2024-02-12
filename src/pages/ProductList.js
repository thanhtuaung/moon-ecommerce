import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 5px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <FilterContainer>
        <Filter>
          <FilterText>Product Filter:</FilterText>
          <Select style={{ marginRight: 20 }}>
            <Option>Yellow</Option>
            <Option>White</Option>
            <Option>Pink</Option>
            <Option>Black</Option>
            <Option>Green</Option>
            <Option>Blue</Option>
          </Select>

          <Select>
            <Option>SM</Option>
            <Option>M</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
            <Option>4XL</Option>
            <Option>5XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Product Sort:</FilterText>
          <Select>
            <Option>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
