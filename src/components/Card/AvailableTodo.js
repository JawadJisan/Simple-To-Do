import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Card from './Card'

const AvailableTodo = () => {
    const [notes, setNotes] = useState([]);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {

        fetch("https://calm-cove-04670.herokuapp.com/todos")
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [isReload]);

    const handleDelete = (id) => {
        fetch(`https://calm-cove-04670.herokuapp.com/todo/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                setIsReload(!isReload)
            })
    }

    return (
        <div className='my-10'>
            <h3 className='text-xl text-center text-secondary my-12'>Your All To do Lists : {notes.length}
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    notes?.map(service => <Card
                        key={service._id}
                        service={service}
                        handleDelete={handleDelete}
                        setIsReload={setIsReload}
                        isReload={isReload}

                    > a</Card>)

                }
            </div>
        </div>
    );
};

export default AvailableTodo;