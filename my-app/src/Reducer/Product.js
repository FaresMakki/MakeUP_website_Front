import {productA} from "../Action/Product_Action";

const product={
    Productlist:[],
    addedprod:"",
    PhotoList:[],
    suggetion:[],
    Discountslist:[],
    err:[]
}
export default(state=product,action)=>{
    switch (action.type){

        case productA.GET_ALL_PRODUCT_REQUEST:
            state={
                ...state}
            break
        case productA.GET_ALL_PRODUCT_REQUEST_SUCCE:
            // console.log(action.payload.category)
            state={
                ...state,
                Productlist: action.payload.Products.product ,
                PhotoList: action.payload.photos.photo ,


            }
            // console.log(state.Productlist)
            break
        case productA.GET_ALL_PRODUCT_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break

        case productA.GET_ALL_PRODUCT_BYPRICE_REQUEST:
            state={
                ...state}
            break
        case productA.GET_ALL_PRODUCT_BYPRICE_REQUEST_SUCCE:
            // console.log(action.payload.category)
            if (action.payload.Products.filteredProducts!==null){
                state={
                    ...state,

                    Productlist: action.payload.Products.filteredProducts ,
                    PhotoList: action.payload.photos.photo ,


                }
                console.log(action.payload.photos.photo)
            }else{state={

            ...state

            }
            }
            console.log(state.Productlist)

            break
        case productA.GET_ALL_PRODUCT_BYPRICE_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break

        case 'CLEAR_PRODUCT_LIST':
            state={
                ...state,
                Productlist:[]
            }
            break
        case 'SortProductList':
            const sortedProducts = [...state.Productlist].sort((a, b) => {
                if (action.payload === true) {
                    return a.Prices - b.Prices;
                } else {
                    return b.Prices - a.Prices;
                }
            });
            state= {
                ...state,
                Productlist: sortedProducts,
            };
            break

        case productA.GET_SUGGESION_REQUEST:
            state={
                ...state}
            break
        case productA.GET_SUGGESION_SUCCE:
            // console.log(action.payload.category)
            state={
                ...state,
                suggetion:action.payload.sug.sugg


            }
            // console.log(state.Productlist)
            break
        case productA.GET_SUGGESION_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break

        case productA.GET_DISCOUNT_REQUEST:
            state={
                ...state}
            break
        case productA.GET_DISCOUNT_SUCCE:
            state={
                ...state,
                Discountslist:action.payload.Discount.disc


            }
            // console.log(state.Productlist)
            break
        case productA.GET_DISCOUNT_FAILD:
            state={
                ...state,
                error:action.payload.err


            }
            break
        case productA.ADD_PRODUCT_REQUEST:
            state={
                ...state}
            break
        case productA.ADD_PRODUCT_SUCCE:
            state={
                ...state,
                Productlist: [...state.Productlist, action.payload.Products.prod],
                addedprod: action.payload.Products.prod._id

            }
            break
        case productA.ADD_PRODUCT_FAILD:
            state={
                ...state,
                error:action.payload.err


            }
            break
        case productA.ADD_PRODUCTPictures_REQUEST:
            state={
                ...state}
            break
        case productA.ADD_PRODUCTPictures_SUCCE:
            state={
                ...state,
                PhotoList: [...state.PhotoList, action.payload.Products.pic],


            }
            break
        case productA.ADD_PRODUCTPictures_FAILD:
            state={
                ...state,
                error:action.payload.err


            }
            break

        case productA.ADD_PRODUCTDISCOUNT_REQUEST:
            state={
                ...state}
            break
        case productA.ADD_PRODUCTDISCOUNT_SUCCE:
            state={
                ...state,
                Discountslist: [...state.Discountslist, action.payload.Productsdiscount.dis],


            }
            break
        case productA.ADD_PRODUCTDISCOUNT_FAILD:
            state={
                ...state,
                error:action.payload.err


            }
            break


        case productA.DELETE_PRODUCT_REQUEST:
            state={
                ...state}
            break
        case productA.DELETE_PRODUCT_SUCCE:
            state={
                ...state,


            }
            break
        case productA.DELETE_PRODUCT_FAILD:
            state={
                ...state,
                error:action.payload.err


            }
            break

        case productA.DELETE_PRODUCTDISCCOUNT_REQUEST:
            state={
                ...state}
            break
        case productA.DELETE_PRODUCTDISCCOUNT_SUCCE:
            state={
                ...state,


            }
            break
        case productA.DELETE_PRODUCTDISCCOUNT_FAILD:
            state={
                ...state,
                error:action.payload.err


            }
            break






    }
    return state
    // joli
}