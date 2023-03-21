import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'



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
        <div className='myProfile-bg'>
            <header className='myDogs-bg'>
                <h1>User Information</h1>
            </header>
            <div className='view-res-content'>
                <p className='label'><span>Name:</span></p>
                <p className='w'><span>{user.firstName} {user.lastName}</span></p>

                <p className='label'><span>Email:</span></p>
                <p className='w'><span>{user.email}</span></p>

                <p className='label'><span>Phone Number:</span></p>
                <p className='w'><span>{user.phoneNumber}</span></p>
                <p className='label'><span>Address:</span></p>
                <p className='w'><span>{user.address}</span></p>

                <p className='label'><span>City:</span></p>
                <p className='w'><span>{user.city}</span></p>

                <p className='label'><span>State:</span></p>
                <p className='w'><span>{user.state}</span></p>

                <p className='label'><span>Zip:</span></p>
                <p className='w'><span>{user.zip}</span></p>
                <button onClick={editHandler}>Edit Profile</button>
            </div>
        </div>
    )
}

export default MyProfile;