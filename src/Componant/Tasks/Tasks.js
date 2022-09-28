import React, { useState, useEffect } from 'react';
// import data from '../../../public/data.json';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    return (
        <div>
            {
                // console.log(['taks'])
            }
        </div>
    );
};

export default Tasks;