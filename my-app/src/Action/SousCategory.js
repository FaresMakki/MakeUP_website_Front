import {souscategory} from "./SousCategoryAction";
import axios from "axios";

export const get_Sous_category=(data)=>{
    return async dispatch=>{
        // console.log("raniwsolt")
        dispatch({type:souscategory.GET_ALL_SOUSCATEGORY_REQUEST})
        try{

            const res=await axios.get(`http://localhost:3000/souscategory/Getall/${data}`)
            // console.log(res.data)
            if(res.status===200){
                dispatch({type:souscategory.GET_ALL_SOUSCATEGORY_SUCCE,
                    payload:{souscategory:res.data}})}
            // console.log(res.data)
        }
        catch (err) {

            dispatch({type:souscategory.GET_ALL_SOUSCATEGORY_FAILD,payload:{err:err.response}})}


    }

}

export const add_Sous_category=(data)=>{



    return async dispatch=>{
        // console.log("raniwsolt")
        dispatch({type:souscategory.ADD_SOUSCATEGORY_REQUEST})
        try{
            const res=await axios.post(`http://localhost:3000/souscategory/add`,data)
            // console.log(res.data)
            if(res.status===200){
                dispatch({type:souscategory.ADD_SOUSCATEGORY_SUCCE,
                    payload:{addsouscat:res.data}})}
            // console.log(res.data)
        }
        catch (err) {

            dispatch({type:souscategory.ADD_SOUSCATEGORY_FAILD,payload:{err:err.response}})}


    }

}

export const delete_Sous_category=(data)=>{
    return async dispatch=>{
        // console.log("raniwsolt")
        dispatch({type:souscategory.DELETE_SOUSCATEGORY_REQUEST})
        try{

            const res=await axios.post(`http://localhost:3000/souscategory/delete/${data}`)
            // console.log(res.data)
            if(res.status===200){
                dispatch({type:souscategory.DELETE_SOUSCATEGORY_SUCCE,
                    payload:{deleted:res.data}})}
            // console.log(res.data)
        }
        catch (err) {

            dispatch({type:souscategory.DELETE_SOUSCATEGORY_FAILD,payload:{err:err.response}})}


    }

}

export const Update_Sous_category=(data)=>{

    const id=data.id
     const Data={
        Name:data.Name
     }
    return async dispatch=>{
        // console.log("raniwsolt")
        dispatch({type:souscategory.UPDATE_SOUSCATEGORY_REQUEST})
        try{

            const res=await axios.post(`http://localhost:3000/souscategory/update/${id}`,Data)
            // console.log(res.data)
            if(res.status===200){
                dispatch({type:souscategory.UPDATE_SOUSCATEGORY_SUCCE,
                    payload:{updated:res.data}})}
            // console.log(res.data)
        }
        catch (err) {

            dispatch({type:souscategory.UPDATE_SOUSCATEGORY_FAILD,payload:{err:err.response}})}


    }

}
