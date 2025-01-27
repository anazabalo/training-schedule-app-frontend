import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  font-family: 'Mona Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1.5px solid #e7e7e9;
  border-radius: 12px;
  font-size: 14px;
  line-height: 28px;
  &:focus {
    border-color: #3f3d91;
    outline: none;
    box-shadow: 0 0 3px rgba(63, 61, 145, 0.5);
  }
`;

const Button = styled.button`
  padding: 18px;
  background-color: #0d0c22;
  color: white;
  border: none;
  border-radius: 9999999px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #1f1e4b;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    console.log({ email, password });
  };

  return (
    <Container>
      <Card>
        <Title>Sign in</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit">Sing In</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
