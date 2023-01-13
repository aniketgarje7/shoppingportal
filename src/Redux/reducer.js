import {ADD,REMOVE, SET_DATA,ADD_Q,REMOVE_Q} from './action'



const cartData = {
    data:[],
    cart:[],
   
}



const dataReducer = (state=cartData,{type,payload})=>{
    switch(type){
        case SET_DATA:
            return {...state,data:[...payload]}
        case ADD:
            return {...state,cart:[...state.cart,{...payload,quantity:1}]}

        case REMOVE:
            return {...state,cart:[...state.cart.filter((check)=>check.id!==payload.id)]}
       
        case ADD_Q:
            return {...state,cart:[...state.cart.map((single)=>{
                if(single.id===payload.id){
                    return {...payload,quantity:single.quantity+1}
                }
                return single
            })]}
        case REMOVE_Q:
            return {...state,cart:[...state.cart.map((single)=>{
                 if(single.id===payload.id){
                        return {...payload,quantity:single.quantity-1}
                    }
                    return single
          })]}
            
        default:
            return state
    }
}

export default dataReducer