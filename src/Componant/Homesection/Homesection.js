import React, { useState } from 'react';
import Intro from '../Intro/Intro';
import Tasks from '../Tasks/Tasks';

const Homesection = () => {
    const [cart, setCart] = useState(0);

    console.log(cart)
    return (
        <div>
            <div className="grid grid-cols-5 md:grid-cols-4  sm:grid-cols-1">
                <div className="col-span-4 pt-16 px-16 md:col-span-3 sm:col-span-1">
                    <div>
                        <img src="" alt="" />
                        <h2 className='capitalize'>daily task</h2>
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