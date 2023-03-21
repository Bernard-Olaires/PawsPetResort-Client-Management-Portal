import React, {useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import { userContext } from '../context/UserContext';
import './dashboard.css'

const Dashboard = (props) => {
    
    const navigate = useNavigate();
    const {loggedInUser} = useContext(userContext);

    console.log(loggedInUser.admin)



    const newDog = (e) => {
        navigate('/newDogForm');
    }

    const newReservation = (e) => {
        navigate('/newReservation')
    }

    return(
        <div className='dashboard-bg'>
            <header className='dash-head'>
                <h1>Welcome to the Dashboard, {loggedInUser.firstName}!</h1>
            </header>
            <div className='link-container'>
                <Link to={`/oneUser/${loggedInUser._id}`} className='link-a'>
                    <div className='myInfo'>
                        <h1 className='container-head'>Profile</h1>
                    </div>
                </Link>
                <Link to={'/myDogs'} className='link b'>
                    <div className='myDogs'>
                        <h1 className='container-headw'>Dog(s)</h1>
                    </div>
                </Link>
                <Link to={'/myReservations'} className='link-a'>
                    <div className='myRes'>
                        <h1 className='container-head'>Reservations</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard;