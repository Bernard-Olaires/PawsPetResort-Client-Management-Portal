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
import './index.css'
import MainEditProfile from './views/MainEditProfile';



function App() {

  return (
    <div className="App">
      <UserProvider>
        <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Main/>}/>
            <Route path='/newDogForm' element={<MainDogForm/>}/>
            <Route path='/myDogs' element={<MainDogs />}/>
            <Route path='/getOneDog/:id' element={<MainViewDog />} />
            <Route path='/editDog/:id' element={<MainEdit />} />
            <Route path='/oneUser/:id' element={<MainProfilePage />} />
            <Route path='/updateUser/:id' element={<MainEditProfile />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
