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
    }
  }
})()


export default mobileActionCreators
