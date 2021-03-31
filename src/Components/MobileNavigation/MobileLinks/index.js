import React from 'react';
import styled from 'styled-components'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Container = styled.div`
  display:flex;
  flex-direction:column;
`

const Items = styled.div`
  font-weight:600;
  letter-spacing:1px;
  font-size:16px;
  width:100%;
  padding:0px 15px;
  margin-top:20px;
  margin-bottom:20px;
  color:white;
  display:flex;
  align-items:center;
  justify-content:space-between;
`

const IconContainer = styled.div`
  padding-right:15px;
`



const data1 =[{title:'Browse'},{title:'Activity'},{title:'Rankings'},
{title:'Blog'},
{title:'Community',icon:<NavigateNextIcon style={{fontSize:"30px"}}/>},
{title:'Create',icon:<NavigateNextIcon style={{fontSize:"30px"}}/>},
{title:'Account',icon:<NavigateNextIcon style={{fontSize:"30px"}}/>}]

const MobileLinks =()=>{

  return(
    <Container>
      {
        data1.map((item,index)=>{
          return(<Items key={index}>
              {item.title}
              <IconContainer>{item.icon}</IconContainer></Items>)
        })
      }
    </Container>
  )
}


export default MobileLinks
