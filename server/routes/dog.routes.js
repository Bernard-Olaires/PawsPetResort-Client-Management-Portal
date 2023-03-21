const DogController = require('../controllers/dog.controller');
const {authenticate} = require('../config/jwt.config');

module.exports = app => {
    app.get('/api/allDogs', DogController.allDogs)
    app.post('/api/postDog', authenticate, DogController.createDog)
    app.get('/api/dogsByLoggedUser', authenticate, DogController.allDogsByLoggedInUser)
    app.get('/api/getOneDog/:id',authenticate, DogController.getOneDog)
    app.delete('/api/deleteDog/:id', DogController.deleteDog)
    app.put('/api/editDog/:id', DogController.updateDog)
}