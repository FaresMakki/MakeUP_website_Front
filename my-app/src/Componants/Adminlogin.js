import React, {useEffect, useState} from 'react';
import styles from "./Admin_login.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ConnectAdmin} from "../Action/Admin";
import {Alert} from "react-bootstrap";
import {initialstate} from "../Reducer/User";
function Login() {

    const [Email,setEmail]=useState(' ')
    const [Password,setPassword]=useState(' ')
    const dispatch =useDispatch()
    const message=useSelector(state => state.admininfo.message)
    const login1=useSelector(state => state.admininfo.login)
    const navigate = useNavigate();

    const connect=(event)=>{
        event.preventDefault();
        let data={
            e_mail:Email,
            Password:Password
        }
        dispatch(ConnectAdmin(data))



    }
    useEffect(()=>{
        console.log("i cant go in")
        if(message==="connection avec succe"&&login1===true){
            console.log("i can enter")
            navigate('/Dash')
        }
    },[message])
    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>


                <div className={styles.right}>
                    <form className={styles.form_container}>
                        <h1>Connect to your account</h1>

                        <input type={"email"} placeholder="E-mail" name="email" value={Email} className={styles.input}
                               onChange={(e) => {
                                   setEmail(e.target.value)
                               }} required/>
                        <input type={"password"} placeholder="password" name="password" value={Password}
                               className={styles.input} onChange={(e) => {
                            setPassword(e.target.value)
                        }} required/>


                        <button type={"submit"} onClick={connect}  className={styles.green_btn}>
                            Login
                        </button>
                    </form>
                    <>
                        {message.length>0&&

                            [
                                'warning',

                            ].map((variant) => (
                                <Alert key={variant} variant={variant}>
                                    {message}
                                </Alert>
                            ))}
                    </>
                </div>
                <div className={styles.left}>
                    <h1>Hello admin</h1>
                </div>
            </div>


        </div>

    );
}

export default Login;