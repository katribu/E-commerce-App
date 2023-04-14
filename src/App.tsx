import {FC} from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import CreateUser from './components/CreateUser/CreateUser';
import Profile from './components/Profile/Profile';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';

const App:FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>} />
            <Route path='/createuser' element={<CreateUser />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
