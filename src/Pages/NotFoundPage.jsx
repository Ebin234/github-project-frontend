import React from 'react';
import styled from 'styled-components';

const NotFoundPage = ({data}) => {
  return <Container>
    <h1>{data}</h1>
  </Container>;
}

export default NotFoundPage;

const Container = styled.div` 
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
h1{
  font-size: 60px;
}
`