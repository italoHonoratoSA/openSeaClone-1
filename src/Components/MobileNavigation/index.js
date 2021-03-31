import React from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';

const Container = styled.div`
  background-color:red;
  height:${({state})=> state ? '100%':'0'};
  opacity:${({state})=> state ? '1':'0'};

  transition:all 0.35s;
  overflow:hidden;
  width:100vw;
  top:72px;
  position:fixed;

`



const MobileNavigation =({show})=>{
  return(
    <Container state={show}>
      <h2>WHERE IS THIS THING</h2>
    </Container>
  )
}

const mapToState =(state)=>{
  return{
      show:state.mobileNavReducer.show
  }
}

const ConnectedMobileNavigation = connect(mapToState)(MobileNavigation)

export default ConnectedMobileNavigation
