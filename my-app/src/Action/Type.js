import {types} from "./Type_Action";
import axios from "axios";

export const get_types=(data)=>{
    return async dispatch=>{
        // console.log("raniwsolt")
        dispatch({type:types.GET_ALL_TYPES_REQUEST})
        try{

            const res=await axios.get(`http://localhost:3000/types/Getall/${data}`)

            // console.log(res.data)

            if(res.status===200){
                dispatch({type:types.GET_ALL_TYPES_SUCCE,
                    payload:{types:res.data}})}
            // console.log(res.data)
        }
        catch (err) {

            dispatch({type:types.GET_ALL_TYPES_FAILD,payload:{err:err.response}})}


    }

}

export const add_types=(data)=>{



    return async dispatch=>{
        // console.log("raniwsolt")
        dispatch({type:types.ADD_TYPES_REQUEST})
        try{
            const res=await axios.post(`http://localhost:3000/types/add`,data)
            // console.log(res.data)
            if(res.status===200){
                dispatch({type:types.ADD_TYPES_SUCCE,
                    payload:{addedtype:res.data}})}
            // console.log(res.data)
        }
        catch (err) {

            dispatch({type:types.ADD_TYPES_FAILD,payload:{err:err.response}})}


    }

}

export const delete_types=(data)=>{
    return async dispatch=>{
        // console.log("raniwsolt")
        dispatch({type:types.DELETE_TYPES_REQUEST})
        try{

            const res=await axios.post(`http://localhost:3000/types/delete/${data}`)
            // console.log(res.data)
            if(res.status===200){
                dispatch({type:types.DELETE_TYPES_SUCCE,
                    payload:{deletedtype:res.data}})}
            // console.log(res.data)
        }
        catch (err) {

            dispatch({type:types.DELETE_TYPES_FAILD,payload:{err:err.response}})}


    }

}

export const Update_types=(data)=>{

    const id=data.id
    const Data={
        Name:data.Name
    }
    return async dispatch=>{
        // console.log("raniwsolt")
        dispatch({type:types.UPDATE_TYPES_REQUEST})
        try{

            const res=await axios.post(`http://localhost:3000/types/update/${id}`,Data)
            // console.log(res.data)
            if(res.status===200){
                dispatch({type:types.UPDATE_TYPES_SUCCE,
                    payload:{updatedtype:res.data}})}
            // console.log(res.data)
        }
        catch (err) {

            dispatch({type:types.UPDATE_TYPES_FAILD,payload:{err:err.response}})}


    }

}
