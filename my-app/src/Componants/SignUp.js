import { Form} from "react-bootstrap";
import styles from './Style_File.module.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {adduser} from "../Action/User";
export default function SignUp(){


    const [Nom,setNom]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const [Tel,setTel]=useState(0)


    const [State,setState]=useState('')
    const [City,setCity]=useState('')
    const [Street,setStreet]=useState('')


const dispatch=useDispatch()

const AddUser=()=>{

        let Data={
            Name:Nom,
            PhoneNum:Tel,
            e_mail:Email,
            Password:Password,
            Address:""+State+"/"+City+"/"+Street
        }
        dispatch(adduser(Data))

}
    return(
    <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
            <div className={styles.left}>
                <h1>welcome back</h1>

                <Link to={"/login"}>
                    <button type={"button"} className={styles.white_btn}>Login</button>

                </Link>
            </div>

            <div className={styles.right}>
                <form className={styles.form_container}>
                   <h1>Create your account</h1>
                    <input type={"text"} placeholder="first name" name="Name" value={Nom} onChange={(e)=>{setNom(e.target.value)}} className={styles.input} required/>
                    <input type={"number"} placeholder="phoneNumber" name="PhoneNum" value={Tel} className={styles.input}  onChange={(e)=>{setTel(e.target.value)}} required />
                    <input type={"email"} placeholder="E-mail" name="email" value={Email} className={styles.input} onChange={(e)=>{setEmail(e.target.value)}} required/>
                    <input type={"password"} placeholder="password" name="password" value={Password} className={styles.input} onChange={(e)=>{setPassword(e.target.value)}} required/>
                    <div className=" d-flex">

                        <Form.Control placeholder={"City"}  value={City} className={styles.input_} onChange={(e)=>{setCity(e.target.value)}} required/>

                        <Form.Control placeholder={"Street"} className={styles.input_} onChange={(e)=>{setStreet(e.target.value)}} value={Street}  required/>

                        <Form.Select value={State} onChange={(e)=>{setState(e.target.value)}} className={styles.input_x} required>
                                    <option>Tunis</option>
                                    <option>Ariana</option>
                                    <option> Ben Arous</option>
                                    <option>Mannouba</option>
                                    <option>Bizerte</option>
                                    <option>Nabeul</option>
                                    <option>Béja</option>
                                    <option>Jendouba</option>
                                    <option>Zaghouan</option>
                                    <option>Siliana</option>
                                    <option>Le Kef</option>
                                    <option>Sousse</option>
                                    <option>Monastir</option>
                                    <option>Mahdia</option>
                                    <option>Kasserine</option>
                                    <option>Sidi Bouzid</option>
                                    <option>Kairouan</option>
                                    <option>Gafsa</option>
                                    <option>Sfax</option>
                                    <option>Gabès</option>
                                    <option>Médenine</option>
                                    <option>Tozeur</option>
                                    <option>Kebili</option>
                                    <option>Ttataouine</option>
                                </Form.Select>

                    </div>
                    <button type={"submit"}  onClick={AddUser} className={styles.green_btn}>
                        SignUp
                    </button>
                </form>
            </div>
        </div>
    </div>




)
}