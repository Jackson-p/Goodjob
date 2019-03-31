import axios from 'axios'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USERDATA = 'USERDATA'

const initialstate = {
    isAuth:false,
    name:"",
    age:""
}


export function changeAuth(state=initialstate, action){
    switch(action.type){
        case LOGIN:
            return {...state, isAuth:true}
        case LOGOUT:
            return {...state, isAuth:false}
        case USERDATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export function getUserData(){
    return dispatch => {
        axios.get('/data').then(res=>{
            if(res.status === 200){
                dispatch(userdata(res.data))
            }
        })
    }
}

export function userdata(data){
    return {type:USERDATA, payload:data}
}
export function login(){
    return {type:LOGIN}
}
export function logout(){
    return {type:LOGOUT}
}