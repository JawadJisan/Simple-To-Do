import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>        
            <button class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">Button</button>
            <button class="btn btn-primary">Button</button>

        
    </div>
    );
};

export default Home;