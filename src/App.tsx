import {FC} from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import './App.css';

const App:FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={Login()}/>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
