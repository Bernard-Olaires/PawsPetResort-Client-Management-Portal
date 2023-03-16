import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './mydogs.css'

const MyDogs = (props) => {
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
