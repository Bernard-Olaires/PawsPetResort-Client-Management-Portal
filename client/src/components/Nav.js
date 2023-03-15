import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';
import axios from 'axios'
import './navbar.css'


const Nav = (props) => {
    const navigate = useNavigate();

    const {loggedInUser, setLoggedInUser} = useContext(userContext);

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


    return(<div>
            <div  className='top-container'>
                <header>
                    <div>
                        <h1>Paws Owners</h1>
                    </div>
                </header>
                <nav className='navbar'>
                    <div className='nav-header'>
                        <h1>Welcome, {loggedInUser.firstName}!</h1>
                    </div>
                    <div className='nav-right'>
                        <button onClick={home}>Home</button>
                        <button onClick={logout}>logout</button>
                    </div>
                </nav>
            </div>
    </div>)
}

export default Nav;