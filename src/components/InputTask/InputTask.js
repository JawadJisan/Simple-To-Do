import React from 'react';
import { useForm } from 'react-hook-form';

const InputTask = () => {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  
//   const navigate = useNavigate();
//   const location = useLocation();
//   let from = location.state?.from?.pathname || "/";



  const onSubmit = data => {
      
    console.log(data)
    const name = data.taskName;
    const description = data.description;
    console.log(name, description)

    fetch('https://calm-cove-04670.herokuapp.com/todo', {
        method: 'POST',
        body: JSON.stringify({name, description }),
        headers: {
          'Content-type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data=> {
        alert(`You Have Successfully Added ${name}` )  
        console.log(data)
        reset()
      })



};




 

  

  return (
    <div className='flex  justify-center items-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <input type="text" placeholder="Task Name" className="input input-bordered w-full max-w-xs"
              {...register("taskName", {
                required:{
                  value: true,
                  message: 'Text Name is Required'
                }
                
              })}
              />
              <label className="label">
              {errors?.taskName?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.taskName?.message} </span>}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              
              <input type="text" placeholder="Task Description" className="input input-bordered w-full max-w-xs"
              {...register("description", {
                required:{
                  value: true,
                  message: 'Task Description is Required'
                },
              })}
              />
              <label className="label">
              {errors.description?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.description?.message} </span>}                
              </label>
            </div>

            <input className='btn w-full max-w-xs' value='Add Task ' type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default InputTask;