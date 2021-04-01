import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  position:fixed;
  top:72px;
  color:rgba(0,0,0,.87);
  font-size:14px;
  font-weight:500;
  font-family: 'Roboto';
  width:100%;
  padding:15px 0;
  display:flex;
  align-items:center;
  z-index:1;
  overflow-x:auto;
  z-index:1;
  white-space:nowrap;
  border:1px solid rgb(229, 232, 235);
  @media only screen and (min-width: 760px) {
  justify-content:center;
}
`

const Items = styled.div`
  margin:auto;
  margin-right:10px;
  margin-left:10px;
  padding-right:10px;
`


const data =['New','Art','Domain Names','Virtual Worlds','Trading Cards','Collectibles','Sports','Utility']

const HeaderLinks =()=>{

  return(
    <Container>
        {
          data.map((item,index)=>{
          return(<Items key={index}>{item}</Items>)
        })}
    </Container>
  )
}

export default HeaderLinks
