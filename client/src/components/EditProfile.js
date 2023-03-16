import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const EditProfile = (props) => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [userReg, setUserReg] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneUser/${id}`)
            .then((updatedUser) => {
                console.log(updatedUser)
                setUserReg(updatedUser.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id]);

    const onChangeHandler = (e) => {
        setUserReg({...userReg, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updateUser/${id}`, userReg)
            .then((res) => {
                navigate(`/dashboard`)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='register-form-container'>
            <form onSubmit={submitHandler} className='register-form'>
                <header>
                    <h1>Update Profile</h1>
                </header>
                <div className='reg-form-parent'>
                    <div>
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={userReg.firstName} onChange={onChangeHandler} />

                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={userReg.lastName} onChange={onChangeHandler} />

                        <label>Email:</label>
                        <label>{userReg.email}</label>
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input type="text" name="phoneNumber" value={userReg.phoneNumber} onChange={onChangeHandler} />

                        <label>Address:</label>
                        <input type="text" name="address" value={userReg.address} onChange={onChangeHandler} />

                        <label>City:</label>
                        <input type="text" name="city" value={userReg.city} onChange={onChangeHandler} />

                        <label>State:</label>
                        <input type="text" name="state" value={userReg.state} onChange={onChangeHandler} />

                        <label>Zip Code:</label>
                        <input type="text" name="zip" value={userReg.zip} onChange={onChangeHandler} />
                    </div>
                </div>

                <div className='register-btn-container'>
                    <button className='register-btn'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditProfile;