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
        <div>
            <header>
                <h1>Dog Name: {dog.dogName}</h1>
            </header>
            <div className="">
                <div className="">
                    <div className="">
                        <p>Dog Name:</p>
                        <p>{dog.dogName}</p>
                        <p>Dog Breed:</p>
                        <p>{dog.dogBreed}</p>
                        <p>Neutered or Spayed?</p>
                        <p>{dog.fixed}</p>
                    </div>
                    <div className="">
                        <p>Dog Last Name:</p>
                        <p>{dog.dogLastName}</p>
                        <p>Sex:</p>
                        <p>{dog.dogSex}</p>
                        <p>at what age:</p>
                        <p>{dog.whatAge}</p>
                    </div>
                </div>
                <div className="">
                    <p>Date of Birth:</p>
                    <p>{dog.dOb}</p>

                    <p>Color:</p>
                    <p>{dog.color}</p>

                    <p>Medications Taken:</p>
                    <p>{dog.medication}</p>

                    <p>Medical Issues / Injuries:</p>
                    <p>{dog.medicalIssues}</p>

                    <p>Food:</p>
                    <p>{dog.dogFood}</p>

                    <p>Behavior Issues</p>
                    <p>{dog.dogBehavior}</p>

                    <p>Group Care or Individual Care?</p>
                    <p>{dog.care}</p>

                    <p>Veterinary Information:</p>
                    <p>Vet's Name:</p>
                    <p>{dog.vetName}</p>


                    <p>Hospital Name:</p>
                    <p>{dog.vetHospital}</p>

                    <p>Location:</p>
                    <p>{dog.vetLocation}</p>

                    <p>Phone Number</p>
                    <p>{dog.vetPhoneNumber}</p>

                    <p>Any Other Notes</p>
                    <p>{dog.otherNotes}</p>

                    <div>
                        <button onClick={deleteHandler}>Delete</button>
                        <button onClick={editHandler}>Edit {dog.dogName}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewDog;