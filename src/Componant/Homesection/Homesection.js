import React from 'react';
import Tasks from '../Tasks/Tasks';

const Homesection = () => {
    return (
        <div>
            <div className="grid grid-cols-5">
                <div className="col-span-4 pt-16 px-16">
                    <div>
                        <img src="" alt="" />
                        <h2 className='capitalize'>daily task</h2>
                    </div>
                    <div className=" grid grid-cols-3">
                        <Tasks></Tasks>
                    </div>
                </div>
                <div>
                    <h2>this is two</h2>
                </div>

            </div>
        </div>
    );
};

export default Homesection;