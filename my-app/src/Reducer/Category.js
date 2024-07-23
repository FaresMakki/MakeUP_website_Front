import {category} from "../Action/Category_Action";

const Category={
    Category_list:[],
    err:[],
    addingstate:[],
    deletedCategory:[],
    UPDATEDFILE:[]

}
export default(state=Category,action)=>{
    switch (action.type){

        case category.GET_ALL_CATEGORY_REQUEST:
            state={
                ...state}
            break
        case category.GET_ALL_CATEGORY_SUCCE:
            // console.log(action.payload.category)
            state={
                ...state,
                Category_list: action.payload.category.Categorys ,


            }

            break
        case category.GET_ALL_CATEGORY_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break

        case category.ADD_CATEGORY_REQUEST:
            state={
                ...state}
            break
        case category.ADD_CATEGORY_SUCCE:
            // console.log(action.payload.category)
            state={
                ...state,
                addingstate: action.payload.addconfirmation.savedcat ,
                Category_list: [...state.Category_list, action.payload.addconfirmation.savedcat],

            }

            break
        case category.ADD_CATEGORY_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break
        case category.DELETE_CATEGORY_REQUEST:
            state={
                ...state}
            break
        case category.DELETE_CATEGORY_SUCCE:
            // console.log(action.payload.category)
            state={
                ...state,
                deletedCategory: action.payload.deleted.Category ,


            }

            break
        case category.DELETE_CATEGORY_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break

        case category.UPDATE_CATEGORY_REQUEST:
            state={
                ...state}
            break

        case category.UPDATE_CATEGORY_SUCCE:
            // console.log(action.payload.category)
            state={
                ...state,
                UPDATEDFILE: action.payload.updated.Category ,


            }

            break

        case category.UPDATE_CATEGORY_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break








    }
    return state
    // joli
}