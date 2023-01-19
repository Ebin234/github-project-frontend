import React from 'react'
import styled from 'styled-components'
import UserDetailsComponent from '../Components/UserDetailsComponent'
import UserRepositories from '../Components/UserRepositories'
function Home() {
  return (
    <Container>
      <UserDetailsComponent />
      <UserRepositories />
    </Container>
  )
}

export default Home

const Container = styled.div`
margin: 4px;
border: 1px solid black;
`
