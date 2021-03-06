import types from '../../Types'

const mobileActionCreators =(()=>{
  return{
    show(){
      return{
        type:types.showTrue
      }
    },
    hide(){
      return{
        type:types.showFalse
      }
    },
    next(payload){
      return{
        type:types.next,
        payload:payload
      }
    },
    back(){
      return{
        type:types.back,
        payload:types.back
      }
    }
  }
})()


export default mobileActionCreators
