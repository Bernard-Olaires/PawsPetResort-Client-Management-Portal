import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom'
import './dashboard.css'

const Dashboard = (props) => {
    
    const navigate = useNavigate();



    const newDog = (e) => {
        navigate('/newDogForm');
    }

    return(
        <div>
            <div className='link-container'>
                <div className='myInfo'>
                    <Link to={'/myInformation'}>My Profile</Link>
                </div>
                <div className='myDogs'>
                    <Link to={'/myDogs'}>My Dog(s)</Link>
                    <button onClick={newDog}>Add a New dog</button>
                </div>
                <div className='myRes'>
                    <Link to={'/myReservations'}>My Reservations</Link>
                    <button>Make a new Reservation</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard;