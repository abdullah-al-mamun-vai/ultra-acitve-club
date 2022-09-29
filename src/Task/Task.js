import React from 'react';

const Task = ({ task, setCart, cart }) => {
    const { title, picture, button, time } = task;
    const handleCart = () => {
        const newValue = time + cart;
        setCart(newValue)
    }
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title capitalize">{title}</h2>
                <p>It is included in my daily life</p>
                <p className='capitalize'>duration: {time}m</p>
                <div className="card-actions justify-center">
                    <button onClick={handleCart} className="btn border-0 w-full bg-orange-400">{button}</button>
                </div>
            </div>
        </div>
    );
};

export default Task;