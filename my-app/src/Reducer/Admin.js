import {admins} from "../Action/Admin_Action";

const admin={
    admin:[],
    error:null,
    message:[],
    login: false

}
export default(state=admin,action)=>{
    switch (action.type){

        case admins.verify_ADMIN_REQUEST:
            state={
                ...state}
            break
        case admins.verify_ADMIN_SUCCESS:

            state={
                ...state,
                message: action.payload.data.state,
                admin:  action.payload.data.Admin

            }
            if(action.payload.data.state==="connection avec succe"){
                state={
                    ...state,
                    login: true

                }
            }
            break
        case admins.verify_ADMIN_FAILD:
            state={
                ...state,
                error:action.payload.err

            }
            break








    }
    return state
    // joli
}