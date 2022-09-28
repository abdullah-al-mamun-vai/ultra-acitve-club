import React from 'react';

const Task = ({ task }) => {
    const { title, picture, button } = task;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-center">
                    <button className="btn w-full bg-orange-400">{button}</button>
                </div>
            </div>
        </div>
    );
};

export default Task;