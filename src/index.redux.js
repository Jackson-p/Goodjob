import { createStore } from 'redux'

const ADD_LIAO = "ADD_LIAO"
const DEC_LIAO = "DEC_LIAO"
//action
export function addliao(){
    return {type:ADD_LIAO}
}
export function decliao(){
    return {type:DEC_LIAO}
}

//reducer
export function adjustLiao(state=0,action){
    switch(action.type){
        case ADD_LIAO:
            return state+1
        case DEC_LIAO:
            return state-1
        default:
            console.log('state initialed')
            return state
    }
}

export const store = createStore(adjustLiao)