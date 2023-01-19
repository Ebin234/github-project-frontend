import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled from 'styled-components';


function Loader() {
  return (
    <Container>
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </Container>
  )
}

export default Loader;

const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 300px;
`
