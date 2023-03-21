import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ViewReservation = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [reservation, setReservation] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getOneReservation/${id}`, { withCredentials: true, })
            .then((reservation) => {
                console.log(reservation.data)
                setReservation(reservation.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteReservation/${id}`)
            .then((res) => {
                navigate('/myReservations')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // | <button onClick={deleteHandler}>Delete</button> 

    return(
        <div className="view-res-bg">
            <header className="myDogs-bg">
                <h1>{reservation.checkIn} to {reservation.checkOut}</h1>
            </header>
            <div className="view-res-content">
                <p className="label"><span>Dog(s) Staying:</span></p>
                <p className="w"><span>{reservation.dogName1}</span></p>
                <p className="w"><span>{reservation.dogName2}</span></p>

                <p className="label"><span>Pick-up Time:</span></p>
                <p className="w"><span>{reservation.pickUp}</span></p>

                <p className="label">
                    <span>Vet Hospital with updated vaccinations:</span>
                </p>
                <p className="w"><span>{reservation.vetHospital}</span></p>

                <p className="label"><span>Vet Hospital Phone Number</span></p>
                <p className="w"><span>{reservation.vetPhone}</span></p>

                <p className="label"><span>Bath at checkout?</span></p>
                <p className="w"><span></span></p>

                <button onClick={deleteHandler} className='button-91'>Cancel Reservation</button>
            </div>
        </div>
    )
}

export default ViewReservation;