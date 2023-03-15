import { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import {UserProvider} from './context/UserContext';
import Login from './components/Login';
import Register from './components/Register';
import Main from './views/Main';
import MainDogForm from './views/MainDogForm';
import MainDogs from './views/MainDogs';
import MainViewDog from './views/MainViewDog';



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
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
