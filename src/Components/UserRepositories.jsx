import React, { useEffect, useState } from 'react'
import {RxDoubleArrowRight,RxDoubleArrowLeft} from 'react-icons/rx'
import {CgArrowLongRight,CgArrowLongLeft} from 'react-icons/cg'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getUserRepositories } from '../Store'
import Loader from './Loader'
import Empty from './Empty'
import { useParams } from 'react-router-dom'


function UserRepositories() {
  const [currentPage,setCurrentPage] = useState(1)
  const userDataLoaded = useSelector((state)=> state.github.dataLoaded)
  const userRepositories = useSelector((state)=>state.github.userRepositories)
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(()=>{
    if(userDataLoaded) dispatch(getUserRepositories({username:params.username}))
  },[userDataLoaded])

  const pageFunc = (params) =>{
    setCurrentPage(params)
  }

  useEffect(()=>{
    dispatch(getUserRepositories({page:currentPage,username:params.username}))
  },[currentPage])

  const newPage = (url)=>{
    window.open(url);
  }

  return (
    <>
    {userRepositories.status === 200 ?
    <Container>
      {userRepositories.data.length?
      <div className="body" >
      {userRepositories.data.map((obj,i)=>
      <div className="box" key={i} onClick={()=>newPage(obj.html_url)}>
        <h2>{obj.name}</h2>
        <p>{obj.description}</p>
        <div className='topics'>
        {obj.topics.map((data,n)=>
        <h5 key={n}>{data}</h5>
        )}
        </div>
      </div>
)}
      </div> : <Empty /> }
      <div className="footer">
      <div className="pagination">
        <div className='number'><RxDoubleArrowLeft /></div>
        <div className='number' onClick={()=>pageFunc(1)}>1</div>
        <div className='number' onClick={()=>pageFunc(2)}>2</div>
        <div className='number' onClick={()=>pageFunc(3)}>3</div>
        <div className='number' onClick={()=>pageFunc(4)}>4</div>
        <div className='number' onClick={()=>pageFunc(5)}>5</div>
        <div className='number' onClick={()=>pageFunc(6)}>6</div>
        <div className='number' onClick={()=>pageFunc(7)}>7</div>
        <div className='number' onClick={()=>pageFunc(8)}>8</div>
        <div className='number' onClick={()=>pageFunc(9)}>9</div>
        <div className='number' ><RxDoubleArrowRight /></div>
      </div>
      <div className='buttons'>
      <button onClick={()=>pageFunc(currentPage - 1)}> <CgArrowLongLeft className='arrow'/> <p>Older</p> </button>
      <button onClick={()=>pageFunc(currentPage + 1)}><p>Newer</p> <CgArrowLongRight className='arrow' /></button>
      </div>
      </div>
    </Container>  : userRepositories.status === 404 ? " " : <Loader/>
  }
  </> 
  )
}

export default UserRepositories;

const Container = styled.div`
.body{
display: grid;
grid-gap: 15px;
grid-template-columns: repeat(2,1fr);

.box{
  border: 1px solid black;
  margin: 30px;
  height: 210px;
  cursor: pointer;
  h2{
    margin: 5px;
    margin-left: 20px;
  }
  p{
    margin: 5px;
    margin-left: 20px;
    margin-top: 10px;
  }
  .topics{
    display: flex;
    flex-direction: row;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin-left: 10px;
    margin-right: 10px;
    h5{
      margin: 10px;
      margin-left: 10px;
      padding: 8px;
      color: #fff;
      background-color: #2672b5;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
    }
  }
}
}
.footer{
.pagination{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 25px 0px;
  .number{
    border: 1px solid #d7d9d8;
    color: #2672b5;
    border-right: none;
    padding: 10px;
  }
  .number:last-child{
    border: 1px solid #d7d9d8;
  }
}
.buttons{
  display: flex;
  gap: 82px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  button{
    border: 1px solid #d7d9d8;
    border-radius: 40px;
    background: #fff;
    font-size: 15px;
    padding: 10px 30px;
    display: flex;
    gap: 5px;
    p{
      margin: 1px;
    }
    .arrow{
      color: #2672b5;
      font-size: 20px;
    }
  }
}
}
`