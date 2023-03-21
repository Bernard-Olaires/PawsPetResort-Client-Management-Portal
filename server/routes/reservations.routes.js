const ReservationController = require('../controllers/reservation.controller')
const {authenticate} = require('../config/jwt.config');

module.exports = app => {
    app.get('/api/allReservations', ReservationController.allReservations)
    app.post('/api/postReservation', authenticate, ReservationController.createReservation)
    app.get('/api/reservationsByLoggedUser', authenticate, ReservationController.allReservationsByLoggedInUser)
    app.delete('/api/deleteReservation/:id', ReservationController.deleteReservation)
    app.get('/api/getOneReservation/:id', authenticate, ReservationController.getOneReservation)
}