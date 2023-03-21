import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import { userContext } from "../context/UserContext";

const ManagementReservations = (props) => {

    const [allReservations, setAllReservations] = useState([]);
    const {loggedInUser} = useContext(userContext);
    useEffect(() => {
        axios.get('http://localhost:8000/api/allReservations')
            .then((allReservations) => {
                console.log(allReservations)
                setAllReservations(allReservations.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []) 

    return(
        <div>
            <header className='myDogs-bg'>
                <h1>{loggedInUser.firstName} {loggedInUser.lastName}</h1>
                <h2>Viewing Dogs</h2>
            </header>
            <div className='content-container'>
                <table className='content-table'>
                    <thead>
                        <tr>
                            <th>Dog 1</th>
                            <th>Dog 2</th>
                            <th>Arrival</th>
                            <th>Departure</th>
                            <th>Bath?</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                        allReservations.map((reservation, index) => (
                            <tbody key={reservation._id}>
                                <tr>
                                    <td>{reservation.dogName1}</td>
                                    <td>{reservation.dogName2}</td>
                                    <td>{reservation.checkIn}</td>
                                    <td>{reservation.checkOut}</td>
                                    <td>{reservation.bath}</td>
                                    <td><Link to={`/managementViewReservation/${reservation._id}`}>View</Link></td>
                                </tr>
                            </tbody>
                        ))
                    }

                </table>
            </div>
            <div className='managRes-bg'>

            </div>
        </div>
    )
}

export default ManagementReservations;