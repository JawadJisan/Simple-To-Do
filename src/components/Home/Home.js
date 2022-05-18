import React from 'react';
import AvailableTodo from '../Card/AvailableTodo';
import InputTask from '../InputTask/InputTask';
import './Home.css'

const Home = () => {
    return (
        <div>
      <InputTask></InputTask>
      <AvailableTodo></AvailableTodo>
         

    </div>
    );
};

export default Home;