import React, { useState } from 'react';
import Intro from '../Intro/Intro';
import Tasks from '../Tasks/Tasks';


const Homesection = () => {
    const [cart, setCart] = useState(0);

    console.log(cart)
    return (
        <div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3  sm:grid-cols-1">
                <div className="lg:col-span-4 pt-16 lg:px-16 md:px-8 sm:px6 md:col-span-2 sm:col-span-1">
                    <div className='my-6 flex justify-center items-center'>
                        <img src="logo.png" className='w-24' alt="" />
                        <h2 className='capitalize font-bold'>the daily task</h2>
                    </div>
                    <div className="">
                        <Tasks click={setCart} cart={cart}></Tasks>
                    </div>
                </div>
                <div className='shadow-2xl shadow-stone-500'>
                    <Intro cart={cart}></Intro>
                </div>

            </div>
        </div>
    );
};

export default Homesection;