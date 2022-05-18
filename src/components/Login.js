import React, { useEffect } from 'react';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';


const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    let Error;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
  
    useEffect(()=>{
        if (guser) {
    
          navigate(from, { replace: true });
        }
      },[guser ])

    if( gerror){
        Error = <p className='text-red-800 text-xs p-3'>{gerror?.message} </p>
      }
    return (
        <div className='flex justify-center items-center'>
           <div>
           <h1 className='text-3xl text-red-800'>Please Login First Using Google </h1> <br />
          <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent text-center items-center">CONTINUE WITH GOOGLE</button>

          {Error}
           </div>
        </div>
    );
};

export default Login;