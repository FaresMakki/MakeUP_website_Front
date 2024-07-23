import {user} from "../Action/User_Actions";

const initialstate={
    users:[],
    error:null,
    message_activation_code:[],
    message:[],
    login:false

}
export default(state=initialstate,action)=>{
    switch (action.type){
        case user.verify_USER_REQUEST:
            state={
            ...state}
            break
        case user.verify_USER_SUCCESS:
            console.log(state.message_activation_code)
            state={
                ...state,
                message_activation_code:action.payload.message

            }
            console.log(state.message_activation_code)
            console.log(action.payload.message)


            break
        case user.verify_USER_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break
        case user.ADD_USER_REQUEST:
            state={
                ...state}
            break
        case user.ADD_USER_SUCCESS:
            state={
                ...state,
            }
            break
        case user.ADD_USER_FAILD:
            state={
                ...state,
            }
            break
        case user.CONNECT_USER_REQUEST:
            state={
                ...state}
            break
        case user.CONNECT_USER_SUCCESS:

            state={
                ...state,
                message: action.payload.data.state,
                users:  action.payload.data.User

            }
            if(action.payload.data.state==="connection avec succe"){
                state={
                    ...state,
                    login: true

                }
            }
            break
        case user.CONNECT_USER_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break

        case user.CONFIG_REQUEST:
            state={
                ...state}
            break
        case user.CONFIG_SUCCESS:

            state={
                ...state,
                login: true

            }
            break
        case user.CONFIG_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break






    }
    return state
    // joli
}
