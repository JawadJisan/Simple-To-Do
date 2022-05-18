import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import InputTask from './components/InputTask/InputTask';
import AvailableTodo from './components/Card/AvailableTodo';
import RequireAuth from './components/Require/RequireAuth';
import Login from './components/Login';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<RequireAuth><Home/></RequireAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>

      </Routes>
    
    </div>
  );
}

export default App;
