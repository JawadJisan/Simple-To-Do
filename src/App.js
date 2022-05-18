import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import InputTask from './components/InputTask/InputTask';

function App() {
  return (
    <div className="">
      <Header></Header>
      <InputTask></InputTask>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
