import React, {useEffect, useState, useContext} from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { userContext } from "../context/UserContext";


const Reservatons = (props) => {
    const [usersReservations, setUsersReservations] = useState([]);
    const {loggedInUser} = useContext(userContext);
    
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/reservationsByLoggedUser", {withCredentials:true})
            .then((allReservations) => {
                console.log(allReservations)
                setUsersReservations(allReservations.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    const newRes = (e) => {
        navigate('/newReservation')
    }


    return(
        <div className='dashboard-bg'>
            <header className='view-header'>
                <h1>{loggedInUser.firstName}'s Reservations</h1>
            </header>
            <div className='content-container'>
                <div className='content-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Arrival</th>
                                <th>Departure</th>
                                <th>Acitons</th>
                            </tr>
                        </thead>
                        {
                            usersReservations.map((reservation) => (
                                <tbody key={reservation._id}>
                                    <tr>
                                        <td>{reservation.checkIn}</td>
                                        <td>{reservation.checkOut}</td>
                                        <td><Link to={`/viewOneReservation/${reservation._id}`}>View</Link></td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </table>
                    <div className='newDog-btn'>
                        <button className='button-90' onClick={newRes}>Add New Rservation</button>
                    </div>
                </div>
            </div>
            <div className='managDash-bg'>

            </div>
        </div>
    )
}

export default Reservatons;