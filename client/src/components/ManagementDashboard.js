import React, { useEffect, useState, useContext} from 'react';
import axios from 'axios'
import { userContext } from "../context/UserContext";
import {Link, useNavigate} from 'react-router-dom';
import './allDogs.css'


const ManagemetDashboard = (props) => {

    const [allDogs, setAllDogs]= useState([]);
    const {loggedInUser} = useContext(userContext);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/allDogs`)
            .then((allDogs) => {
                console.log(allDogs.data)
                console.log("ADMIN????",loggedInUser.admin)
                setAllDogs(allDogs.data)
            })
            .catch((err) => {
                console.log(err)
                
            })
    }, [])

    return(
        <div>
            <header className='view-header'>
                <h1>{loggedInUser.firstName} {loggedInUser.lastName}</h1>
                <h2>Viewing Dogs</h2>
            </header>
            <div className='content-container'>
                <table className='content-table'>
                    <thead>
                        <tr>
                            <th>Dog</th>
                            <th>Last Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {                  
                        allDogs.map((dog, index) => (
                            <tbody key={dog._id}>
                                <tr>
                                    <td>{dog.dogName}</td>
                                    <td>{dog.dogLastName}</td>
                                    <td>
                                        <Link to={`/managementViewDog/${dog._id}`}>View</Link>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
            <div className='managDash-bg'>

            </div>
        </div>
    )
}

export default ManagemetDashboard;