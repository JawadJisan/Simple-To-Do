import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const InputTask = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  
//   const navigate = useNavigate();
//   const location = useLocation();
//   let from = location.state?.from?.pathname || "/";



  const onSubmit = data => {
    console.log(data)

};




 

  

  return (
    <div className='flex  justify-center items-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <input type="text" placeholder="Task Name" className="input input-bordered w-full max-w-xs"
              {...register("text", {
                required:{
                  value: true,
                  message: 'Text Name is Required'
                }
                
              })}
              />
              <label className="label">
              {errors.text?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message} </span>}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              
              <input type="text" placeholder="Task Description" className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required:{
                  value: true,
                  message: 'Password is Required'
                },
              })}
              />
              <label className="label">
              {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message} </span>}                
              </label>
            </div>

            <input className='btn w-full max-w-xs' value='Login' type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default InputTask;