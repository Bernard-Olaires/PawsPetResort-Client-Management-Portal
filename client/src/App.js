import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {UserProvider} from './context/UserContext';
import Login from './components/Login';
import Register from './components/Register';
import Main from './views/Main';
import MainDogForm from './views/MainDogForm';
import MainDogs from './views/MainDogs';
import MainViewDog from './views/MainViewDog';
import MainEdit from './views/MainEdit';
import MainProfilePage from './views/MainProfilePage';
import MainEditProfile from './views/MainEditProfile';
import MainManagementDashbaord from './views/MainManagementDashboard';
import MainReservations from './views/MainReservations';
import MainReservationFrom from './views/MainReservationForm';
import MainViewReservation from './views/MainViewReservation';
import MainManagementReservations from './views/MainManagementReservations';
import MainManagementViewDog from './views/MainManagementViewDog';
import MainManagementViewRes from './views/MainManagementViewRes';
import ManagementLogin from './components/ManagementLogin';

function App() {

  return (
    <div className="App">
      <UserProvider>
        <Routes>
            {/* User Routes */}
            <Route path='/' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Main/>}/>
            <Route path='/newDogForm' element={<MainDogForm/>}/>
            <Route path='/myDogs' element={<MainDogs />}/>
            <Route path='/getOneDog/:id' element={<MainViewDog />} />
            <Route path='/editDog/:id' element={<MainEdit />} />
            <Route path='/oneUser/:id' element={<MainProfilePage />} />
            <Route path='/updateUser/:id' element={<MainEditProfile />} />
            <Route path='/myReservations' element={<MainReservations />} />
            <Route path='/newReservation' element={<MainReservationFrom />} />
            <Route path='/viewOneReservation/:id' element={<MainViewReservation />} />
            
            {/* Management Routes */}
            <Route path='/managementDashboard' element={<MainManagementDashbaord />} />
            <Route path='/managementReservations' element={<MainManagementReservations />} />
            <Route path='/managementViewDog/:id' element={<MainManagementViewDog />} />
            <Route path='/managementViewReservation/:id' element={<MainManagementViewRes />} />
            <Route path='/managementLogin' element={<ManagementLogin />} />

        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
