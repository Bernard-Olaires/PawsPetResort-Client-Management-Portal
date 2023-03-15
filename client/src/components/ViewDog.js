import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
// import './mydogs.css'

const ViewDog = (props) => {

    const {id} = useParams()

    const navigate = useNavigate();
    const [dog, setDog] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getOneDog/${id}`, {withCredentials: true,})
            .then((dog) => {
                console.log(dog.data)
                setDog(dog.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    return(
        <div>
            <h1>View One Dog</h1>
            <div>
                <p>{dog.dogName}</p>
            </div>
        </div>
    )
}

export default ViewDog;