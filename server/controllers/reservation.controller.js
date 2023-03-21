const Reservation = require('../models/reservation.model')
const jwt = require('jsonwebtoken');

module.exports = {

    allReservations: (req, res) => {
        Reservation.find()
            .then((allReservations) => {
                res.json(allReservations)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    createReservation: async (req,res) => {
        try{
            const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
            console.log(decodedJwt);
            const user_id = decodedJwt.payload._id
            console.log('USER ID', user_id);
            const reservation = req.body
            reservation['user_id'] = user_id
            const completedReservation = await Reservation.create(reservation)
            console.log('New Reservation', completedReservation)
            res.json(completedReservation)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    allReservationsByLoggedInUser: async (req,res) => {
        try{
            const idFromAuthenticate = req.user
            const allReservationsByLoggedInUser = await Reservation.find({user_id:idFromAuthenticate})
            res.json(allReservationsByLoggedInUser)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    deleteReservation: (req, res) => {
        Reservation.deleteOne({_id: req.params.id})
            .then((response) => {
                console.log(response)
                res.json(response)
            })
            .catch((err)=> {
                console.log(err)
                res.status(500).json(err)
            })
    },
    getOneReservation: async (req, res) => {
        try{
            const reservation_id = req.params.id
            const oneDog = await Reservation.findById(reservation_id)
            res.json(oneDog)
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}
