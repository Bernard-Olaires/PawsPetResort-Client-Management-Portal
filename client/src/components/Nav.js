import React, {useContext} from 'react';
import {useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';
import axios from 'axios'
import pawsLogo from '../images/paws-logo.png'
import './navbar.css'


const Nav = (props) => {
    const navigate = useNavigate();

    const {loggedInUser} = useContext(userContext);

    const logout = (e) => {
        axios.post('http://localhost:8000/api/logout', {} ,{withCredentials:true})
            .then((res)=>{
                console.log(res)
                navigate('/login')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const home = (e) => {
        navigate('/dashboard');
    }

    const myDogs = (e) => {
        navigate('/myDogs');
    }

    const myRes = (e) => {
        navigate('/myReservations')
    }


    return(
        <div className='top-container'>
            <div className='paws-logo'>
                <img src={pawsLogo}/>
            </div>
            <div className='navbar'>
                <div className='nav-right'>
                    <button class="button-89"role="button" onClick={home}>Dashboard</button>
                    <button class="button-89"role="button" onClick={myDogs}>My Dog(s)</button>
                    <button class="button-89"role="button" onClick={myRes}>Reservations</button>
                    <button class="button-89"role="button" onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Nav;