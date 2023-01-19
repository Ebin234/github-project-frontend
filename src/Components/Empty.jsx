import React from 'react';
import styled from 'styled-components';

function Empty() {
  return (
    <Container>
      <h3>Empty</h3>
    </Container>
  )
}

export default Empty;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
h3{
    color: black;
    font-size: 30px;
}
`
