import React,{useState} from 'react';
import styled from 'styled-components'

import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Container = styled.div`
  display:flex;
  align-items:center;
  color:rgba(14, 14, 14, 0.75);

`
const IconContainer = styled.div`
  margin:5px;
  border-radius:50%;
  border:3px solid rgb(32, 129, 226);
  display:flex;
  align-items:center;
  justify-content:center;
  padding:5px 7px 9px 7px;
  cursor:pointer;
`
const ArrowContainer = styled.div`
  transition:all 0.3s;
  transform:${({state})=> state ? 'rotate(180deg)':'rotate(0deg)' };
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;


`


const Icon =()=>{

  const [state,setState] =useState(false);


  return(
    <Container>
      <IconContainer>
        <FilterHdrIcon style={{fontSize:'30px'}}/>
      </IconContainer>
      <ArrowContainer onClick={()=>setState(!state)} state={state}>
        <KeyboardArrowDownIcon style={{fontSize:'30px'}}/>
      </ArrowContainer>
    </Container>
  )
}


export default Icon
