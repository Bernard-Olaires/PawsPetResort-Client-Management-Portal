import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { userContext } from "../context/UserContext";
import './mydogs.css'

const MyDogs = (props) => {
    const navigate = useNavigate();
    const { loggedInUser, setLoggedInUser } = useContext(userContext);
    const [usersDog, setUsersDog] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/dogsByLoggedUser",  {withCredentials: true,})
            .then((allDogs) => {
                console.log(allDogs);
                setUsersDog(allDogs.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>My Dog(s)</h1>
            <div className="container">
            { 
                usersDog.map((dog) => (
                    <div key={dog._id} className='myDog-content'>
                        <div>
                            <h4>{dog.dogName}</h4>
                            <p>{dog.dogBreed}</p>
                            <Link to={`/getOneDog/${dog._id}`}>View</Link>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default MyDogs;

                    {/* <div>
                            <div className="top-form">
                                <div className="top-left">
                                    <label>Dog Name</label>
                                    <p>dog.dogName</p>
                                    <label>Dog Breed</label>
                                    <label>Neutered or Spayed?</label>
                                </div>
                                <div className="top-right">
                                    <label>Dog Last Name</label>
                                    <label>Sex</label>
                                    <label>at what age?</label>
                                </div>
                            </div>
                            <div className="bottom-form">
                                <label>Date of Birth</label>

                                <label>Color</label>

                                <label>Medications Taken</label>

                                <label>Medical Issues / Injuries</label>

                                <label>
                                    What Brand, Type, and protien base do you feed your dog?
                                </label>

                                <label>Behavior Issues</label>

                                <label>Group Care or Individual Care?</label>

                                <p>Veterinary Information:</p>
                                <label>Vet's Name</label>


                                <label>Hospital Name</label>

                                <label>Location</label>

                                <label>Phone Number</label>

                                <label>Any Other Notes</label>

                                <button>Submit My Dog</button>
                            </div>
                        </div> */}