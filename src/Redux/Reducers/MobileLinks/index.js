import NavigateNextIcon from '@material-ui/icons/NavigateNext';


import types from '../../Types'
import {communityData,accountData,createData} from './mobileLinksData'

const initialState ={
  linksData:[{title:'Browse'},{title:'Activity'},{title:'Rankings'},
  {title:'Blog'},
  {title:'Community',icon:<NavigateNextIcon style={{fontSize:"30px"}}/>,payload:types.community},
  {title:'Create',icon:<NavigateNextIcon style={{fontSize:"30px"}}/>,payload:types.create},
  {title:'Account',icon:<NavigateNextIcon style={{fontSize:"30px"}}/>,payload:types.account}],

  secondViewData:communityData,

  showSecondView:false,
}




const mobileLinksReducers =(state=initialState,action)=>{

  switch (action.payload) {
    case types.account:
      return{...state,showSecondView:true,secondViewData:accountData}

    case types.community:
      return{...state,showSecondView:true,secondViewData:communityData}

    case types.create:
      return{...state,showSecondView:true,secondViewData:createData}

    case types.back:
      return{...state,showSecondView:false}
    default:
      return state

  }


}


export default mobileLinksReducers
