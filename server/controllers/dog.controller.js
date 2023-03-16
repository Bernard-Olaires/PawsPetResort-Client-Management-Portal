const Dog = require('../models/dog.model');
const jwt = require('jsonwebtoken');

module.exports = {

    allDogs: (res,req) => {
        Dog.find()
            .then((allDogs) => {
                res.json(allDogs)
            })
            .catch((err)=>{
                res.status(500).json(err)
            })
    },
    createDog: async (req, res) => {
        try{
            const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
            console.log(decodedJwt);
            const user_id = decodedJwt.payload._id
            console.log('USER ID', user_id);
            const dog = req.body
            dog['user_id'] = user_id
            const completedDog = await Dog.create(dog)
            console.log('New Dog ', completedDog)
            res.json(completedDog)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    allDogsByLoggedInUser: async (req, res) => {
        try{
            const idFromAuthenticate = req.user
            const allDogsByLoggedInUser = await Dog.find({user_id:idFromAuthenticate})
            res.json(allDogsByLoggedInUser)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    getOneDog: async (req, res) => {
        try{
            const dog_id = req.params.id
            const oneDog = await Dog.findById(dog_id)
            res.json(oneDog)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    deleteDog: (req, res) => {
        Dog.deleteOne({_id: req.params.id})
            .then((response) => {
                console.log(response)
                res.json(response)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json(err)
            })
    },
    updateDog: (req, res) => {
        Dog.findByIdAndUpdate({ _id: req.params.id } ,req.body, {new: true, runValidators: true})
            .then((updatedDog) => {
                res.json(updatedDog)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json(err)
            })
    } 
}


// deleteDog: async (req, res) => {
//     try{
//         const idFromAuthenticate = req.params.id
//         const deleteDog = await Dog.deleteOne({dog_id:idFromAuthenticate})
//         res.json(deleteDog)
//     }
//     catch(err){
//         res.status(500).json(err)

//     }
// }







