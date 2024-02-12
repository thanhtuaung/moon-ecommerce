import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://t3.ftcdn.net/jpg/04/29/97/36/240_F_429973653_N258TnADxIQ0HAiDq31814hWpy9vODDb.jpg")
      no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  padding: 30px;
  box-shadow: 5px 10px 18px #888888;
`;

const Title = styled.h2`
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 10px;
  margin: 20px 0px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
`;

const Agreement = styled.p`
  font-size: 14px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  margin-top: 20px;
  padding: 10px 30px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create Account</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
        </Form>
        <Agreement>
          By creating account, you agree our terms and conditions
        </Agreement>
        <Button>Create</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
