import React, { useEffect } from 'react'
import styled from 'styled-components'
import { IoLocationSharp } from "react-icons/io5";
import { FiLink2 } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../Store';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../Pages/NotFoundPage';


function UserDetailsComponent() {
  const userDataLoaded = useSelector((state) => state.github.dataLoaded)
  const userData = useSelector((state) => state.github.userData)
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(params.username))
  }, [userDataLoaded])

const newPage = (url)=>{
  window.open(url)
}

  return (
    <>{userDataLoaded ?
      <Container>
        {userData.status === 404 ? <NotFoundPage data={userData.data}/> :
          <div className='header'>
            <div >
              <img src={userData.data.avatar_url} alt="profile" />
              <div className='link'>
                <FiLink2 />
                <h5 onClick={()=>newPage(userData.data.html_url)}>{userData.data.html_url}</h5>
              </div>
            </div>
            <div className='profiledata'>
              <h2>{userData.data.name}</h2>
              <p>{userData.data.bio}</p>
              <div className='location'>
                <IoLocationSharp />
                <p>India</p>
              </div>
              <div className='twitter'>
                <h5 onClick={()=>newPage(`http://twitter.com/${userData?.data.twitter_username}`)}>Twitter :  
                  {` http://twitter.com/${userData?.data.twitter_username}`} </h5>
              </div>
            </div>
          </div>
        }
      </Container> : <Loader />}
    </>

  )
}

export default UserDetailsComponent;

const Container = styled.div`
.header{
margin: 15px 35px;
display: flex;
.link{
  margin: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  h5{
    text-decoration: none;
    margin: 5px 10px;
    color: black;
    cursor: pointer;
  }
}
img{
  height: 200px;
    width: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 5px;
    border: 1px solid #d7d9d8;
    padding: 4px;
}
.profiledata{
  margin: 45px;
  h2{
    margin: 8px 4px;
  }
  p{
    margin: 4px;
  }
  .location{
    margin: 2px;
    display: flex;
    
    align-items: center;
  }
  .twitter{
    display: flex;
    h5{
      margin: 8px 4px;
      cursor: pointer;
    }
  }
}
}
`
