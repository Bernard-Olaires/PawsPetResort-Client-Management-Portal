import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './mydogs.css'
import { userContext } from "../context/UserContext";

const MyDogs = (props) => {
    const [usersDog, setUsersDog] = useState([]);
    const {loggedInUser} = useContext(userContext);
    const navigate = useNavigate()

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

    const newDog = (e) => {
        navigate('/newDogForm')
    }

    return (
        <div>
            <header className="myDogs-bg">
                <h1>{loggedInUser.firstName}'s Dogs</h1>
            </header>
            <div className="container">
                { 
                    usersDog.map((dog) => (
                        <div key={dog._id} className='myDog-content-container'>
                            <div className='myDog-content'>
                                <h4 className="backgr"><span>{dog.dogName}</span></h4>
                                <p className="backgr"><span>{dog.dogBreed}</span></p>
                                <Link to={`/getOneDog/${dog._id}`} className="backgr"><span>View</span></Link>
                            </div>
                        </div>
                    ))
                }
                <div className="newDog-btn">
                    <button class="button-90"role="button" onClick={newDog}>Add New Friend</button>
                </div>
            </div>
        </div>
    );
};

export default MyDogs;
