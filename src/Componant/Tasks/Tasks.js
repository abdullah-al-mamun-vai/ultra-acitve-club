import React, { useState, useEffect } from 'react';
import Task from '../../Task/Task';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    return (
        <div className=' grid grid-cols-3'>
            {tasks.map(task => <Task task={task}></Task>)}
        </div>
    );
};

export default Tasks;