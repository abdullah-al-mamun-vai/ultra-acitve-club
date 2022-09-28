import React, { useState, useEffect } from 'react';
import Task from '../../Task/Task';
// import data from '../../../public/data.json';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    return (
        <div className=' grid grid-cols-3'>

        </div>
    );
};

export default Tasks;