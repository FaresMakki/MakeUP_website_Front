import axios from "axios"
import {user} from "./User_Actions";
export const adduser=(data)=>{
    return async dispatch=>{
        dispatch({type:user.ADD_USER_REQUEST})
        try{
            const res=await axios.post("http://localhost:3000/user/signup",data)
            if(res.status===200){
            dispatch({type:user.ADD_USER_SUCCESS,payload:{message:res.data}})}

        }
        catch (err) {
            dispatch({type:user.ADD_USER_FAILD,payload:{err:err.response}})}


    }

}
export const verifyuser=(data)=>{

    return async dispatch=>{
        dispatch({type:user.verify_USER_REQUEST})
        try{


            const res=await axios.post(`http://localhost:3000/user/verifyuser/${data}`)


            if(res.status===200){
                dispatch({type:user.verify_USER_SUCCESS,payload:{message:res.data}})}
        }
        catch (err) {
            dispatch({type:user.verify_USER_FAILD,payload:{err:err.response}})}


    }

}
    export const Connect=(data)=>{
        return async dispatch=>{
            dispatch({type:user.CONNECT_USER_REQUEST})
            try{

                const res=await axios.get(`http://localhost:3000/user/login_check/${data.e_mail}/${data.Password}`)
                if(res.status===200){
                    dispatch({type:user.CONNECT_USER_SUCCESS,payload:{data:res.data}})}
console.log(res.data)
                }
            catch (err) {

                dispatch({type:user.CONNECT_USER_FAILD,payload:{err:err.response}})}


        }

    }
    export const LoginConfig=()=>{
        return async dispatch=>{
            dispatch({type:user.CONFIG_REQUEST})
            try{


                    dispatch({type:user.CONFIG_SUCCESS,payload:{data:false}})}


            catch (err) {

                dispatch({type:user.CONFIG_FAILD,payload:{err:err.response}})}


        }

    }
