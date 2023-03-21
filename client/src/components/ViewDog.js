import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './viewDog.css';


const ViewDog = (props) => {

    const { id } = useParams()

    const navigate = useNavigate();
    const [dog, setDog] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getOneDog/${id}`, { withCredentials: true, })
            .then((dog) => {
                console.log(dog.data)
                setDog(dog.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteDog/${id}`)
            .then((res) => {
                navigate('/myDogs')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const editHandler = (e) => {
        navigate(`/editDog/${id}`)
    }



    return (
        <div className="view-container">
            <header className="view-header">
                <h1>Dog Name: {dog.dogName}</h1>
            </header>
            <div className="top-content">
                <div className="top-left">
                    <p className='label'>Dog Name:</p>
                    <p>{dog.dogName}</p>
                    <p className='label'>Dog Breed:</p>
                    <p>{dog.dogBreed}</p>
                    <p className='label'>Neutered or Spayed?</p>
                    <p>{dog.fixed}</p>
                    <p className='label'>Date of Birth:</p>
                    <p>{dog.dOb}</p>

                    <p className='label'>Color:</p>
                    <p>{dog.color}</p>

                    <p className='label'>Medications Taken:</p>
                    <p>{dog.medication}</p>

                    <p className='label'>Medical Issues / Injuries:</p>
                    <p>{dog.medicalIssues}</p>

                    <p className='label'>Food:</p>
                    <p>{dog.dogFood}</p>

                    <p className='label'>Behavior Issues</p>
                    <p>{dog.dogBehavior}</p>

                    <p className='label'>Group Care or Individual Care?</p>
                    <p>{dog.care}</p>
                </div>
                <div className="top-right">
                    <p className="label">Dog Last Name:</p>
                    <p>{dog.dogLastName}</p>
                    <p className='label'>Sex:</p>
                    <p>{dog.dogSex}</p>
                    <p className='label'>at what age:</p>
                    <p>{dog.whatAge}</p>
                    <p className='label'>Veterinary Information:</p>
                    <p className='label'>Vet's Name:</p>
                    <p>{dog.vetName}</p>


                    <p className='label'>Hospital Name:</p>
                    <p>{dog.vetHospital}</p>

                    <p className='label'>Location:</p>
                    <p>{dog.vetLocation}</p>

                    <p className='label'>Phone Number</p>
                    <p>{dog.vetPhoneNumber}</p>

                    <p className='label'>Any Other Notes</p>
                    <p>{dog.otherNotes}</p>

                    <div id="view-button">
                        <button class="button-91"role="button" onClick={deleteHandler}>Delete</button>
                        <button class="button-92"role="button" onClick={editHandler}>Edit {dog.dogName}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDog;