const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema({
    dogName1: {
        type: String,
        required: [true, "Dog Name 1 is required."]
    },
    dogName2: {
        type: String,
    },
    checkIn: {
        type: String,
        required: [true, "Check-in is required."]
    },
    checkOut: {
        type: String,
        required: [true, "Check-out is required."]
    },
    pickUp: {
        type: String,
        required: [true, "Pick-up is required."]
    },
    bath: {
        type: String,
        required: [true, "Bath is required."]
    },
    vetHospital: {
        type: String,
        required: [true, "Vet Hospital is required."]
    },
    vetPhone: {
        type: String,
        required: [true, "Vet Phone Number is required."]
    },
    newInstructions: {
        type: String,
        required: [true, "Dog Name 1 is required."]
    },
    user_id:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

}, {timestamps:true})

const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;