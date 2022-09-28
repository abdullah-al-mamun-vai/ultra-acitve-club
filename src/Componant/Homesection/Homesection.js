import React from 'react';
import Intro from '../Intro/Intro';
import Tasks from '../Tasks/Tasks';

const Homesection = () => {
    return (
        <div>
            <div className="grid grid-cols-5 md:grid-cols-4  sm:grid-cols-1">
                <div className="col-span-4 pt-16 px-16 md:col-span-3 sm:col-span-1">
                    <div>
                        <img src="" alt="" />
                        <h2 className='capitalize'>daily task</h2>
                    </div>
                    <div className="">
                        <Tasks></Tasks>
                    </div>
                </div>
                <div className='shadow-2xl shadow-stone-500'>
                    <Intro></Intro>
                </div>

            </div>
        </div>
    );
};

export default Homesection;