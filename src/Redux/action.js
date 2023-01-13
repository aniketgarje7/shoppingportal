export const SET_DATA = 'SET_DATA'
export const  ADD = 'ADD'
export const REMOVE = 'REMOVE'
export const ADD_Q = 'ADD_Q'
export const REMOVE_Q = 'REMOVE_Q'

export const  add = (item)=>{
    return {
        type:ADD,
        payload:item
    }
}

export const remove = (item)=>{
    return {
        type:REMOVE,
        payload:item
    }
}

export const setData = (item)=>{
    return {
        type:SET_DATA,
        payload:item
    }
}

export const addQ = (item)=>{
    return {
        type:ADD_Q,
        payload:item
    }
}
export const removeQ = (item)=>{
    return {
        type:REMOVE_Q,
        payload:item
    }
}
