import {category} from "./Category_Action";
import axios from "axios";

export const get_all_category=(data)=>{
    return async dispatch=>{

        dispatch({type:category.GET_ALL_CATEGORY_REQUEST})
        try{

            const res=await axios.get(`http://localhost:3000/category/Getall`)

            if(res.status===200){
                dispatch({type:category.GET_ALL_CATEGORY_SUCCE,
                    payload:{category:res.data}})}

        }
        catch (err) {

            dispatch({type:category.GET_ALL_CATEGORY_FAILD,payload:{err:err.response}})}


    }

}
export const add_category=(data)=>{
    return async dispatch=>{
        dispatch({type:category.ADD_CATEGORY_REQUEST})
        try{
                console.log(`what you need:http://localhost:3000/category/add`,data)
            const res=await axios.post(`http://localhost:3000/category/add`,data)
            if(res.status===200){
                dispatch({type:category.ADD_CATEGORY_SUCCE,
                    payload:{addconfirmation:res.data}})}

        }
        catch (err) {

            dispatch({type:category.ADD_CATEGORY_FAILD,payload:{err:err.response}})}


    }

}
export const delete_category=(data)=>{
    return async dispatch=>{

        dispatch({type:category.DELETE_CATEGORY_REQUEST})
        try{

            const res=await axios.post(`http://localhost:3000/category/delete/${data}`)

            if(res.status===200){
                dispatch({type:category.DELETE_CATEGORY_SUCCE,
                    payload:{deleted:res.data}})}

        }
        catch (err) {

            dispatch({type:category.DELETE_CATEGORY_FAILD,payload:{err:err.response}})}


    }

}
export const Update_category=(data)=>{
    return async dispatch=>{
        if (data.icone===""){data.icone="notupdated"}

        dispatch({type:category.UPDATE_CATEGORY_REQUEST})
        try{

            const res=await axios.post(`http://localhost:3000/category/update`,data)

            if(res.status===200){
                dispatch({type:category.UPDATE_CATEGORY_SUCCE,
                    payload:{updated:res.data}})}

        }
        catch (err) {

            dispatch({type:category.UPDATE_CATEGORY_FAILD,payload:{err:err.response}})}


    }

}
