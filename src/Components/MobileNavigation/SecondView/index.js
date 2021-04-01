import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'

import mobileActionCreators from '../../../Redux/ActionCreators/MobileNavActionCreators'

const Container = styled.div`
  position:absolute;
  height:100%;
  width:100vw;
  top:0;
  transition:all 0.35s;
  right:${({state})=>state? '0vw' : '-100vw'};
  background-color:rgb(32, 129, 226);
  display:flex;
  flex-direction:column;
  color:white;
`

const ItemContainer = styled.div`
  display:flex;
  align-items:center;
  font-size:16px;
  width:90%;
  margin:20px auto;
`
const ItemTitle = styled(ItemContainer)`
  margin-bottom:10px;
  border-bottom:1px solid white;
  padding-bottom:10px;
`

const SecondView =({show,back,secondViewData})=>{

  return(
    <Container state={show}>
      <ItemTitle onClick={()=>{back()}}>
        {secondViewData[0].icon}
        {secondViewData[0].title}
      </ItemTitle>
      {
        secondViewData.slice(1).map((item,index)=>{
          return(
            <ItemContainer key={index}>{item.icon}{item.title}</ItemContainer>
          )
        })
      }
    </Container>
  )
}

const mapStateToProps =(state)=>{

  return{
    show:state.mobileLinksReducer.showSecondView,
    secondViewData:state.mobileLinksReducer.secondViewData
  }
}

const mapStateToDispatch ={
  back:mobileActionCreators.back
}

const ConnectedSecondView = connect(mapStateToProps,mapStateToDispatch)(SecondView)

export default ConnectedSecondView
