import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'
import './registerStyle.css';



const MyProfile = (props) => {
    
    const {id} = useParams();
    const navigate = useNavigate()
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneUser/${id}`)
            .then((user) => {
                console.log(user)
                setUser(user.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id]);

    const editHandler = (e) => {
        navigate(`/updateUser/${user._id}`)
    }

    return( 
        <div>
            <h1>User Information</h1>
            <div>
                <p>Name:</p>
                <p>{user.firstName} {user.lastName}</p>

                <p>Email:</p>
                <p>{user.email}</p>

                <p>Phone Number:</p>
                <p>{user.phoneNumber}</p>
            </div>
            <div>
                <div>
                    <p>Address:</p>
                    <p>{user.address}</p>
                </div>
                <div>
                    <p>City:</p>
                    <p>{user.city}</p>
                </div>
                <div>
                    <p>State:</p>
                    <p>{user.state}</p>
                </div>
                <div>
                    <p>Zip:</p>
                    <p>{user.zip}</p>
                </div>
            </div>
            <div>
                <button onClick={editHandler}>Edit Profile</button>
            </div>
        </div>
    )
}

export default MyProfile;