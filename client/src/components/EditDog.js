import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'

const EditDog = (props) => {

    const { id } = useParams()
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const [dog, setDog] = useState({
        dogName:'',
        dogLastName:'',
        dogBreed:'',
        dogSex:'',
        dOb:'',
        fixed:'',
        whatAge:'',
        color:'',
        medication:'',
        medicalIssues:'',
        dogFood:'',
        dogBehavior:'',
        care:'',
        vetName:'',
        vetHospital:'',
        vetLocation:'',
        vetPhoneNumber:'',
        otherNotes:'',
        user_id:''
    })

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

    const handleInputChange = (e) => {
        setDog({...dog, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/editDog/${id}`, dog)
            .then((res) => {
                navigate('/myDogs')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }



    return(
        <div>
        <form onSubmit={submitHandler}>
            <header>
                <h1>Add a new dog!</h1>
                <p>Congratulations on the new friend!</p>
            </header>
            <div className='top-form'>
                <div className='top-left'>
                    <label>Dog Name</label>
                    <input type='text'onChange={handleInputChange} value={dog.dogName} name='dogName'/>
                    {
                        errors.dogName?
                        <p className='errors'>{errors.dogName.message}</p>:
                        null
                    }

                    <label>Dog Breed</label>
                    <input type='text' onChange={handleInputChange} value={dog.dogBreed} name='dogBreed'/>
                    {
                        errors.dogBreed?
                        <p className='errors'>{errors.dogBreed.message}</p>:
                        null
                    }

                    <label>Neutered or Spayed?</label>
                    <input onChange={handleInputChange} value={dog.fixed} name='fixed'/>
                    {
                        errors.fixed?
                        <p className='errors'>{errors.fixed.message}</p>:
                        null
                    }
                </div>
                <div className='top-right'>
                    <label>Dog Last Name</label>
                    <input type='text' onChange={handleInputChange} value={dog.dogLastName} name='dogLastName'/>
                    {
                        errors.dogLastName?
                        <p className='errors'>{errors.dogLastName.message}</p>:
                        null
                    }

                    <label>Sex</label>
                    <input type='text' onChange={handleInputChange} value={dog.dogSex} name='dogSex'/>

                    {
                        errors.dogSex?
                        <p className='errors'>{errors.dogSex.message}</p>:
                        null
                    }

                    <label>at what age?</label>
                    <input type='text' onChange={handleInputChange} value={dog.whatAge} name='whatAge'/>
                    {
                        errors.whatAge?
                        <p className='errors'>{errors.whatAge.message}</p>:
                        null
                    }
                </div>
            </div>
            <div className='bottom-form'>

                <label>Color</label>
                <input type='text' onChange={handleInputChange} value={dog.color} name='color'/>
                {
                        errors.color?
                        <p className='errors'>{errors.color.message}</p>:
                        null
                }

                <label>Medications Taken</label>
                <input type='text' onChange={handleInputChange} value={dog.medication} name='medication'/>
                {
                        errors.medication?
                        <p className='errors'>{errors.medication.message}</p>:
                        null
                }

                <label>Medical Issues / Injuries</label>
                <input type='text' onChange={handleInputChange} value={dog.medicalIssues} name='medicalIssues'/>
                {
                        errors.medicalIssues?
                        <p className='errors'>{errors.medicalIssues.message}</p>:
                        null
                }

                <label>What Brand, Type, and protien base do you feed your dog?</label>
                <input type='text' onChange={handleInputChange} value={dog.dogFood} name='dogFood'/> 
                {
                        errors.dogFood?
                        <p className='errors'>{errors.dogFood.message}</p>:
                        null
                }

                <label>Behavior Issues</label>
                <input type='text' onChange={handleInputChange} value={dog.dogBehavior} name='dogBehavior'/> 
                {
                        errors.dogBehavior?
                        <p className='errors'>{errors.dogBehavior.message}</p>:
                        null
                }

                <label>Group Care or Individual Care?</label>
                <input type='text' onChange={handleInputChange} value={dog.care} name='care'/> 
                {
                        errors.care?
                        <p className='errors'>{errors.care.message}</p>:
                        null
                }

                <p>Veterinary Information:</p>
                <label>Vet's Name</label>
                <input type='text' onChange={handleInputChange} value={dog.vetName} name='vetName'/> 
                {
                        errors.vetName?
                        <p className='errors'>{errors.vetName.message}</p>:
                        null
                }

                <label>Hospital Name</label>
                <input type='text' onChange={handleInputChange} value={dog.vetHospital} name='vetHospital'/> 
                {
                        errors.vetHospital?
                        <p className='errors'>{errors.vetHospital.message}</p>:
                        null
                }

                <label>Location</label>
                <input type='text' onChange={handleInputChange} value={dog.vetLocation} name='vetLocation'/> 
                {
                        errors.vetLocation?
                        <p className='errors'>{errors.vetLocation.message}</p>:
                        null
                }

                <label>Phone Number</label>
                <input type='text' onChange={handleInputChange} value={dog.vetPhoneNumber} name='vetPhoneNumber'/> 
                {
                        errors.vetPhoneNumber?
                        <p className='errors'>{errors.vetPhoneNumber.message}</p>:
                        null
                }

                <label>Any Other Notes</label>
                <textarea  onChange={handleInputChange} value={dog.otherNotes} name='otherNotes' rows={6} cols={60}/>
                {
                        errors.othe?
                        <p className='errors'>{errors.othe.message}</p>:
                        null
                }

                <button>Submit My Dog</button>
            </div>
        </form>
    </div>
    )
}

export default EditDog;