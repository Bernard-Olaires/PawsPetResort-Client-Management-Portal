import React, {useState, useContext} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';
import pawsLogo from '../images/paws-logo.png'
import './navbar.css'

const ManagementNav = (props) => {
    
    const {loggedInUser} = useContext(userContext);
    const navigate = useNavigate();

    const logout = (e) => {
        axios.post('http://localhost:8000/api/logout', {} ,{withCredentials:true})
            .then((res)=>{
                console.log(res)
                navigate('/login')
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const dogsHandler = (e) => {
        navigate('/managementDashboard')
    }

    const reservationHandler = (e) => {
        navigate(`/managementReservations`)
    }

    return(
        <div  className='top-container'>
            <div className='paws-logo'>
                <img src={pawsLogo}/>
            </div>
            <nav className='navbar'>
                <div className='nav-right'>
                    <button class="button-89"role="button" onClick={dogsHandler}>Dogs</button>
                    <button class="button-89"role="button" onClick={reservationHandler}>Reservations</button>
                    <button class="button-89"role="button" onClick={logout}>logout</button>
                </div>
            </nav>
        </div>
                    // {/* <h1>{loggedInUser.firstName} {loggedInUser.lastName}</h1> */}
    )
}
export default ManagementNav;