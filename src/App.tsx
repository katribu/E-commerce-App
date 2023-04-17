import {FC} from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import CreateUser from './components/CreateUser/CreateUser';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Profile from './components/Profile/Profile';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App:FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoute/>}>
              <Route path='/home' element={<Home/>} />
              <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/createuser' element={<CreateUser />} />
            <Route path='/' element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
