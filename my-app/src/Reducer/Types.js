import {types} from "../Action/Type_Action";

const typestate={
    typesList:[],
    err:[],
    addedtype:[],
    deletedtype:[],
    UPDATEDtype:[]

}
export default(state=typestate,action)=>{
    switch (action.type){

        case types.GET_ALL_TYPES_REQUEST:
            state={
                ...state}
            break
        case types.GET_ALL_TYPES_SUCCE:
            // console.log(action.payload.category)
            state={
                ...state,
                typesList: action.payload.types.categorytypes ,


            }
            // console.log(state.SousCategooryList)
            break
        case types.GET_ALL_TYPES_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break
        case types.ADD_TYPES_REQUEST:
            state={
                ...state}
            break
        case types.ADD_TYPES_SUCCE:
            // console.log(action.payload.category)
            state={
                ...state,
                addedtype: action.payload.addedtype.savedtype ,
                typesList: [...state.typesList, action.payload.addedtype.savedtype],

            }

            break
        case types.ADD_TYPES_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break
        case types.DELETE_TYPES_REQUEST:
            state={
                ...state}
            break
        case types.DELETE_TYPES_SUCCE:
            // console.log(action.payload.category)
            state={
                ...state,
                deletedtype: action.payload.deletedtype.deletedtypes ,


            }

            break
        case types.DELETE_TYPES_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break
        case types.UPDATE_TYPES_REQUEST:
            state={
                ...state}
            break
        case types.UPDATE_TYPES_SUCCE:
            state={
                ...state,
                UPDATEDtype: action.payload.updatedtype.Updatedtypes ,
            }
            break
        case types.UPDATE_TYPES_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break








    }
    return state
    // joli
}