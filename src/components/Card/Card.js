import React from 'react';

const Card = ({service, handleDelete, isReload, setIsReload  }) => {
    const {description, name,  } = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-secondary text-xl font-bold">{name} </h2>
          <p> Desctription: {description} </p>
        </div>
        <div className='text-center'>
            <button 
            onClick={() => handleDelete(service?._id)}

              className="btn btn-sm mx-2 ">
              delete
            </button>
          </div>
      </div>
    );
};

export default Card;