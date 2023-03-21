import {FC} from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css';

const App:FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={Login()}/>
          <Route path='/profile' element={Profile()} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
