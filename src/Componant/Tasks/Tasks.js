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
        <div className=' grid grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1'>
            {tasks.map(task => <Task task={task} key={task.id}></Task>)}
        </div>
    );
};

export default Tasks;