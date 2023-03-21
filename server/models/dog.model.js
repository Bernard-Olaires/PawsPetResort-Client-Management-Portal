const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
    dogName: {
        type: String,
        required: [true, "Dog Name is required."]
    },
    dogLastName: {
        type: String,
        required: [true, "Dog Last Name is required."]
    },
    dogBreed: {
        type: String,
        required: [true, "Dog breed required."]
    },
    dogSex: {
        type: String,
        required: [true, "Must mark Male or Female."]
    },
    dOb :{
        type: Date,
        required: [true, "Dog Date of Birth is required."],
        min: ['2000-01-01', 'Date of birth must not be before 2000.']
    },
    fixed: {
        type: String,
        required: [true, "Must specify if your dog has been neutured/spayed."]
    },
    whatAge: {
        type: String
    },
    color: {
        type: String,
        required: [true, 'Dog color is required.']
    },
    medication: {
        type: String
    },
    medicalIssues: {
        type: String
    },
    dogFood: {
        type: String,
        required: [true, "Dog Food is required."]
    },
    dogBehavior: {
        type: String,
        required: [true, "Dog Behavior is required."]
    },
    care: {
        type: String,
        required: [true, "Must specify type of care."]
    },
    vetName: {
        type: String,
        required: [true, "Vet Name is required."]
    },
    vetHospital: {
        type: String,
        required: [true, "Vet Hospital is required."]
    },
    vetLocation: {
        type: String,
        required: [true, "Vet Location is required."]
    },
    vetPhoneNumber: {
        type: String,
        required: [true, "Vet Number is required. "]
    },
    otherNotes: {
        type: String,
    },
    user_id:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps:true})

const Dog = mongoose.model('Dog', DogSchema);

module.exports = Dog;


