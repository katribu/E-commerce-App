import {FC} from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import CreateUser from './components/CreateUser/CreateUser';
import './App.css';

const App:FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/createuser' element={<CreateUser />} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
