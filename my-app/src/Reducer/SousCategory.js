import {souscategory} from "../Action/SousCategoryAction";

const SousCategory={
    SousCategooryList:[],
    err:[],
    addedsouscategory:[],
    deletedSousCategory:[],
    UPDATEDSousCategory:[]

}
export default(state=SousCategory,action)=>{
    switch (action.type){

        case souscategory.GET_ALL_SOUSCATEGORY_REQUEST:
            state={
                ...state}
            break
        case souscategory.GET_ALL_SOUSCATEGORY_SUCCE:
            // console.log(action.payload.category)
            state={
                ...state,
                SousCategooryList: action.payload.souscategory.SousCategorys ,


            }
            // console.log(state.SousCategooryList)
            break
        case souscategory.GET_ALL_SOUSCATEGORY_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break
        case souscategory.ADD_SOUSCATEGORY_REQUEST:
            state={
                ...state}
            break
        case souscategory.ADD_SOUSCATEGORY_SUCCE:
            // console.log(action.payload.category)
            state={
                ...state,
                addedsouscategory: action.payload.addsouscat.savedsoucat ,
                SousCategooryList: [...state.SousCategooryList, action.payload.addsouscat.savedsoucat],

            }

            break
        case souscategory.ADD_SOUSCATEGORY_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break
        case souscategory.DELETE_SOUSCATEGORY_REQUEST:
            state={
                ...state}
            break
        case souscategory.DELETE_SOUSCATEGORY_SUCCE:
            // console.log(action.payload.category)
            state={
                ...state,
                deletedSousCategory: action.payload.deleted.SousCategory ,


            }

            break
        case souscategory.DELETE_SOUSCATEGORY_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break
        case souscategory.UPDATE_SOUSCATEGORY_REQUEST:
            state={
                ...state}
            break
        case souscategory.UPDATE_SOUSCATEGORY_SUCCE:
            state={
                ...state,
                UPDATEDFILE: action.payload.updated.SousCategory ,
            }
            break
        case souscategory.UPDATE_SOUSCATEGORY_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break








    }
    return state
    // joli
}