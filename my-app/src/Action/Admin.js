import {admins} from "./Admin_Action";
import axios from "axios";

export const ConnectAdmin=(data)=>{
    return async dispatch=>{
        dispatch({type:admins.verify_ADMIN_REQUEST})
        try{

            const res=await axios.get(`http://localhost:3000/admin/login/${data.e_mail}/${data.Password}`)

            if(res.status===200){
                dispatch({type:admins.verify_ADMIN_SUCCESS,payload:{data:res.data}})}

        }
        catch (err) {

            dispatch({type:admins.verify_ADMIN_FAILD,payload:{err:err.response}})}


    }

}