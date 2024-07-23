import {productA} from "./Product_Action";
import axios from "axios";

export const get_all_product_mainphoto=()=>{

    return async dispatch=>{
        dispatch({type:productA.GET_ALL_PRODUCT_REQUEST})
        try{

            const prod=await axios.get(`http://localhost:3000/product/getall`)
            const pic=await axios.get(`http://localhost:3000/picture/getall`)
            // console.log(res.data)
            if(prod.status===200&&pic.status===200){
                dispatch({type:productA.GET_ALL_PRODUCT_REQUEST_SUCCE,
                    payload:{Products:prod.data,
                            photos:pic.data
                }})}
            // console.log(res.data)
        }
        catch (err) {

            dispatch({type:productA.GET_ALL_PRODUCT_FAILD,payload:{err:err.response}})}


    }

}
export const addprod=(product)=>{

    return async dispatch=>{
        console.log("action")
        dispatch({type:productA.ADD_PRODUCT_REQUEST})
        try{

            const prod=await axios.post(`http://localhost:3000/product/add`,product)
            if(prod.status===200){
                dispatch({type:productA.ADD_PRODUCT_SUCCE,
                        payload:{Products:prod.data,
                }})}
            // console.log(res.data)
        }
        catch (err) {

            dispatch({type:productA.ADD_PRODUCT_FAILD,payload:{err:err.response}})}


    }

}
export const addprodphotos=(imgs)=>{

    return async dispatch=>{
        dispatch({type:productA.ADD_PRODUCTPictures_REQUEST})
        try{

            const prod=await axios.post(`http://localhost:3000/picture/add`,imgs)
            if(prod.status===200){
                dispatch({type:productA.ADD_PRODUCTPictures_SUCCE,
                        payload:{Products:prod.data,
                }})}
            // console.log(res.data)
        }
        catch (err) {

            dispatch({type:productA.ADD_PRODUCTPictures_FAILD,payload:{err:err.response}})}


    }

}
export const addprodDiscount=(dis)=>{

    return async dispatch=>{
        dispatch({type:productA.ADD_PRODUCTDISCOUNT_REQUEST})
        try{

            const prod=await axios.post(`http://localhost:3000/discount/add`,dis)
            if(prod.status===200){
                dispatch({type:productA.ADD_PRODUCTDISCOUNT_SUCCE,
                        payload:{Productsdiscount:prod.data,
                }})}
            // console.log(res.data)
        }
        catch (err) {

            dispatch({type:productA.ADD_PRODUCTDISCOUNT_FAILD,payload:{err:err.response}})}


    }

}
export const Updateprod=(dis)=>{

    return async dispatch=>{
        dispatch({type:productA.UPDATE_PRODUCT_REQUEST})
        try{

            const prod=await axios.post(`http://localhost:3000/discount/add`,dis)
            if(prod.status===200){
                dispatch({type:productA.UPDATE_PRODUCT_SUCCE,
                        payload:{Productsdiscount:prod.data,
                }})}
            // console.log(res.data)
        }
        catch (err) {

            dispatch({type:productA.UPDATE_PRODUCT_FAILD,payload:{err:err.response}})}


    }

}
export const deleteprod=(id)=>{

    return async dispatch=>{
        dispatch({type:productA.DELETE_PRODUCT_REQUEST})
        try{

            const prod=await axios.post(`http://localhost:3000/product/delete/${id}`,)
            if(prod.status===200){
                dispatch({type:productA.DELETE_PRODUCT_SUCCE,
                        payload:{Products:prod.data,
                }})}
            // console.log(res.data)
        }
        catch (err) {

            dispatch({type:productA.DELETE_PRODUCT_FAILD,payload:{err:err.response}})}


    }

}
export const getprodbyprices=(min,max)=>{

    return async dispatch=>{
        dispatch({type:productA.GET_ALL_PRODUCT_BYPRICE_REQUEST})
        try{

            const prod=await axios.get(`http://localhost:3000/product/Getbyprice/${min}`)
            const pic=await axios.get(`http://localhost:3000/picture/getall`)
            // console.log(res.data)
            if(prod.status===200&&pic.status===200){
                dispatch({type:productA.GET_ALL_PRODUCT_BYPRICE_REQUEST_SUCCE,
                    payload:{Products:prod.data,
                        photos:pic.data
                    }})}
        }
        catch (err) {

            dispatch({type:productA.GET_ALL_PRODUCT_BYPRICE_FAILD,payload:{err:err.response}})}


    }

}
export const Getsuggestion=(types)=>{

    return async dispatch=>{
        dispatch({type:productA.GET_SUGGESION_REQUEST})
        try{
            const SUG=await axios.get(`http://localhost:3000/product/Getbytype/${types}`)
            // console.log(res.data)
            if(SUG.status===200){
                dispatch({type:productA.GET_SUGGESION_SUCCE,
                    payload:{sug:SUG.data,

                    }})}
        }
        catch (err) {

            dispatch({type:productA.GET_SUGGESION_FAILD,payload:{err:err.response}})}


    }

}
export const GetproductDiscount=(types)=>{

    return async dispatch=>{
        dispatch({type:productA.GET_DISCOUNT_REQUEST})
        try{
            const SUG=await axios.get(`http://localhost:3000/discount/getall`)
            // console.log(res.data)
            if(SUG.status===200){
                dispatch({type:productA.GET_DISCOUNT_SUCCE,
                    payload:{Discount:SUG.data,

                    }})}
        }
        catch (err) {

            dispatch({type:productA.GET_DISCOUNT_FAILD,payload:{err:err.response}})}


    }

}
export const deleteproductdiscount=(id)=>{

    return async dispatch=>{
        dispatch({type:productA.DELETE_PRODUCTDISCCOUNT_REQUEST})
        try{
            const SUG=await axios.post(`http://localhost:3000/discount/delete/${id}`)
            // console.log(res.data)post
            if(SUG.status===200){
                dispatch({type:productA.DELETE_PRODUCTDISCCOUNT_SUCCE,
                    payload:{DEL:SUG.data,

                    }})}
        }
        catch (err) {

            dispatch({type:productA.DELETE_PRODUCTDISCCOUNT_FAILD,payload:{err:err.response}})}


    }

}
export const clearProductList = () => ({
    type: 'CLEAR_PRODUCT_LIST'
});
export const Sortproduct = (bool) => ({
    type: 'SortProductList',
    payload:bool
});
// export const addtocart = (prod) => ({
//     type: 'addprod',
//     payload:prod
// });



