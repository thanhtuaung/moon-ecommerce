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
  width: 20%;
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
  margin: 20px 0px;
  gap: 20px 0px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 60%;
  padding: 10px;
`;

const ForgotPassword = styled.div`
  font-size: 14px;
  text-align: end;
  cursor: pointer;
  text-decoration: underline;
`;

const Button = styled.button`
  width: 100%;
  margin: 20px 0px;
  border: none;
  padding: 10px 30px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const CreateAccLink = styled.div`
  font-size: 14px;
`;

const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />
        </Form>
        <ForgotPassword>Forgot Password?</ForgotPassword>
        <Button>Login</Button>
        <CreateAccLink>
          Don't have an account? <Link>Create Account</Link>
        </CreateAccLink>
      </Wrapper>
    </Container>
  );
};

export default Login;
