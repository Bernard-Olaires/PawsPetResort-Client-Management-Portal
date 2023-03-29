import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import dogsLooking from '../images/looking-up.jpeg'
import './newDog.css'

const ReservationForm = (props) => {

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const [reservation, setReservation] = useState({
        dogName1:'',
        dogName2:'',
        checkIn:'',
        checkOut:'',
        pickUp:'',
        bath:'',
        vetHospital:'',
        vetPhone:'',
        newInstructions:''
    })

    const handleInputChange = (e) => {
        setReservation({...reservation, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/postReservation', reservation, {withCredentials:true} )
            .then((res) => {
                console.log(res)
                navigate('/myReservations')
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors);
            })
    }

    return(
        <div>
            <header className='form-header'>
                <h1>New Reservation</h1>
            </header>
            <form onSubmit={submitHandler} className='form-bg'>
                <div className='top-form'>
                    <div className='top-left'>
                        <label>Dog Name 1</label>
                        <input type='text' onChange={handleInputChange} value={reservation.dogName1} name='dogName1' />
                        {
                            errors.dogName1?
                            <p className='errors'>{errors.dogName1.message}</p>:
                            null
                        }

                        <label>Dog Name 2</label>
                        <input type='text' onChange={handleInputChange} value={reservation.dogName2} name='dogName2' />


                        <label>Want a before check-out?</label>
                        <input type='text' onChange={handleInputChange} value={reservation.bath} name='bath' placeholder='"yes" or "no". +$35 bath charge'/>
                        {
                            errors.bath?
                            <p className='errors'>{errors.bath.message}</p>:
                            null
                        }   

                    </div>
                    <div className='top-right'>
                        <label>check-in</label>
                        <input type='text' onChange={handleInputChange} value={reservation.checkIn} name='checkIn' placeholder='MM/DD/YYYY'/>
                        {
                            errors.checkIn?
                            <p className='errors'>{errors.checkIn.message}</p>:
                            null
                        }

                        <label>check-out</label>
                        <input type='text' onChange={handleInputChange} value={reservation.checkOut} name='checkOut' placeholder='MM/DD/YYYY'/>
                        {
                            errors.checkOut?
                            <p className='errors'>{errors.checkOut.message}</p>:
                            null
                        }

                        <label>Pick-Up Time</label>
                        <input type='text' onChange={handleInputChange} value={reservation.pickUp} name='pickUp' />
                        {
                            errors.pickUp?
                            <p className='errors'>{errors.pickUp.message}</p>:
                            null
                        }
                    </div>
                </div>
                <div className='bottom-form'>
                    <label>Vet Hospital with Updated Vaccinations:</label>
                    <input type='text' onChange={handleInputChange} value={reservation.vetHospital} name='vetHospital' />
                        {
                            errors.vetHospital?
                            <p className='errors'>{errors.vetHospital.message}</p>:
                            null
                        }

                    <label>Vet Hospital Phone Number:</label>
                    <input type='text' onChange={handleInputChange} value={reservation.vetPhone} name='vetPhone' />
                        {
                            errors.vetPhone?
                            <p className='errors'>{errors.vetPhone.message}</p>:
                            null
                        }

                    <label>Any Other Instructions / Comments:</label>
                    <input type='text' onChange={handleInputChange} value={reservation.newInstructions} name='newInstructions' />
                        {
                            errors.newInstructions?
                            <p className='errors'>{errors.newInstructions.message}</p>:
                            null
                        }
                        <button className='button-90'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ReservationForm;