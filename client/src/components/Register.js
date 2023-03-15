import React, {useState} from 'react';
import './registerStyle.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {

    const navigate = useNavigate();

    const [userReg, setUserReg]= useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        phoneNumber:'',
        address:'',
        city:'',
        state:'',
        zip:''
    })

    const onChangeHandler = (e) => {
        setUserReg({...userReg, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', userReg, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='register-form-container'>
            <form onSubmit={submitHandler} className='register-form'>
                <header>
                    <h1>New Client</h1>
                </header>
                <div className='reg-form-parent'>
                    <div>
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={userReg.firstName} onChange={onChangeHandler}/>

                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={userReg.lastName} onChange={onChangeHandler}/>

                        <label>Email:</label>
                        <input type="text" name="email" value={userReg.email} onChange={onChangeHandler}/>

                        <label>Password:</label>
                        <input type="password" name="password" value={userReg.password} onChange={onChangeHandler}/>

                        <label>Confirm Password:</label>
                        <input type="password" name="confirmPassword" value={userReg.confirmPassword} onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input type="text" name="phoneNumber" value={userReg.phoneNumber} onChange={onChangeHandler}/>

                        <label>Address:</label>
                        <input type="text" name="address" value={userReg.address} onChange={onChangeHandler}/>

                        <label>City:</label>
                        <input type="text" name="city" value={userReg.city} onChange={onChangeHandler}/>

                        <label>State:</label>
                        <input type="text" name="state" value={userReg.state} onChange={onChangeHandler}/>

                        <label>Zip Code:</label>
                        <input type="text" name="zip" value={userReg.zip} onChange={onChangeHandler}/>
                    </div>
                </div>

                <div className='register-btn-container'>
                    <button className='register-btn'>Register</button>
                </div>
                <div className='login'>
                    <p>Already have an account?</p>
                    <Link to={'/login'}>Login Here</Link>
                </div>
            </form>
        </div>
    )
}

export default Register;