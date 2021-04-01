import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import MessageIcon from '@material-ui/icons/Message';
import AddCommentIcon from '@material-ui/icons/AddComment';
import HelpIcon from '@material-ui/icons/Help';
import BookIcon from '@material-ui/icons/Book';
import CodeIcon from '@material-ui/icons/Code';
import FaceIcon from '@material-ui/icons/Face';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import types from '../../Types'

const initialState ={
  linksData:[{title:'Browse'},{title:'Activity'},{title:'Rankings'},
  {title:'Blog'},
  {title:'Community',icon:<NavigateNextIcon style={{fontSize:"30px"}}/>,payload:types.community},
  {title:'Create',icon:<NavigateNextIcon style={{fontSize:"30px"}}/>,payload:types.create},
  {title:'Account',icon:<NavigateNextIcon style={{fontSize:"30px"}}/>,payload:types.account}],

  secondViewData:[
    {icon:<ArrowBackIosIcon style={{fontSize:'30px',marginRight:'10px'}}/>,title:"Community"},
    {icon:<MessageIcon style={{fontSize:'30px',marginRight:'10px'}}/>,title:"Help Center"},
    {icon:<AddCommentIcon style={{fontSize:'30px',marginRight:'10px'}}/>,title:"Suggestions"},
    {icon:<HelpIcon style={{fontSize:'30px',marginRight:'10px'}}/>,title:"FAQ"},
    {icon:<BookIcon style={{fontSize:'30px',marginRight:'10px'}}/>,title:"Blog"},
    {icon:<CodeIcon style={{fontSize:'30px',marginRight:'10px'}}/>,title:"Developers"},
    {icon:<FaceIcon style={{fontSize:'30px',marginRight:'10px'}}/>,title:"Careers"},
  ],
  showSecondView:false,

}



const mobileLinksReducers =(state=initialState,action)=>{

  switch (action.payload) {
    case types.account:
      return{...state,showSecondView:true}

    case types.community:
      return{...state,showSecondView:true}

    case types.create:
      return{...state,showSecondView:true}

    case types.back:
      return{...state,showSecondView:false}
    default:
      return state

  }


}


export default mobileLinksReducers
