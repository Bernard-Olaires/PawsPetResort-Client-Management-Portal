import React from 'react';
import ManagementNav from '../components/ManagementNav';
import ManagementReservations from '../components/ManagementReservations'


const MainManagementReservations = (props) => {

    return(
        <div>
            <ManagementNav />
            <ManagementReservations />
        </div>
    )
}

export default MainManagementReservations;