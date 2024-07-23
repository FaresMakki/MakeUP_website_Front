import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {verifyuser} from "../Action/User";
import {Alert} from "react-bootstrap";

export default function Confirmation(){
    const {activationcode}=useParams()
    const dispatch=useDispatch()
    const[test,settest]=useState(true)

    const message=useSelector(state => state.usersinfo.message_activation_code.state)
    useEffect(() => {
        dispatch(verifyuser(activationcode))


        },  []);

    useEffect(()=>{
        if(message==="expired"){
            settest(false)
        }



    },[message])


return(
    <div>

        {test && (
            <Alert variant="success">
                <Alert.Heading>Your Account is verified</Alert.Heading>
                <p>
                    You can go back to the login page now and connect to your account.
                </p>
                <hr />
                <p className="mb-0">
                    ****************
                </p>
            </Alert>
        )}
       {!test && (
            <Alert variant="warning">
                <Alert.Heading>Expiredlink</Alert.Heading>
                <p>
                    this link is expired (after 24hours) we sent you another link on your email
                </p>
                <hr />
                <p className="mb-0">
                    ****************
                </p>
            </Alert>
        )}
    </div>

)




}
