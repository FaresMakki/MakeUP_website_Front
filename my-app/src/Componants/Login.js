import React, {useEffect, useState} from 'react';
import styles from "./Style_File.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Connect, verifyuser} from "../Action/User";
import {Alert} from "react-bootstrap";
import {initialstate} from "../Reducer/User";
function Login() {

    const [Email,setEmail]=useState(' ')
    const [Password,setPassword]=useState(' ')
    const dispatch =useDispatch()
    const message=useSelector(state => state.usersinfo.message)
    const login1=useSelector(state => state.usersinfo.login)
    const users=useSelector(state => state.usersinfo.users)
    const navigate = useNavigate();

    const connect=(event)=>{
        event.preventDefault();
        let data={
        e_mail:Email,
        Password:Password
        }
        dispatch(Connect(data))



    }
    useEffect(()=>{
        console.log("i cant go in")
        if(message==="connection avec succe"&&login1===true){
            console.log("i can enter")
            navigate('/signup')
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
                    <h1>Are you new here</h1>

                    <Link to={"/SignUp"}>
                        <button type={"button"} className={styles.white_btn}>SignUP</button>

                    </Link>
                </div>
            </div>


        </div>

    );
}

export default Login;