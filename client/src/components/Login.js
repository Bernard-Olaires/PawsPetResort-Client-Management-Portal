import React, {useState, useContext} from 'react';
import {Link, useLocation ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../context/UserContext';
import pawsLogo from '../images/paws-logo.png'
import './login.css'

const Login = (props) => {

    const navigate = useNavigate()
    const {setLoggedInUser} = useContext(userContext)
    const path = useLocation().pathname;
    const location = path.split("/")[1];

    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })

    const onChangeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }

    const loginHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', userLogin, {withCredentials:true})
            .then((res) => {
                // console.log(res) 
                // console.log(res.data.user.admin)
                setLoggedInUser(res.data.user);
                window.localStorage.setItem('uuid', res.data.user._id)
                if(res.data.user.admin === false){
                    navigate('/dashboard')
                }else{
                    navigate('/managementDashboard')
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div className='login-container'> 
            <div className="login-form-container">
                <div className='paws-logo'>
                    <img src={pawsLogo}/>
                </div>
                <form onSubmit={loginHandler} className='login-form'>
                    <header>
                        <h1>Returning Clients</h1>
                    </header>
                    <label className='form-label'>Email:</label>
                    <input className='form-control' type="text" name='email' value={userLogin.email} onChange={onChangeHandler}/>

                    <label className='form-label'>Password:</label>
                    <input className='form-control' type="password" name='password' value={userLogin.password} onChange={onChangeHandler}/>

                    <div className='login-btn-container'>
                        <button className='login-btn'>Login</button>
                    </div>
                    <div className='register'>
                        <p>Don't have an account?</p>
                        <Link className='text-white' to={'/'}>Register</Link>
                    </div>
                </form>
            </div>
            <div className='dog-bg'>

            </div>
        </div>
    )
}

export default Login;