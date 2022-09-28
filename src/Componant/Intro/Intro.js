import React from 'react';

const Intro = () => {
    return (
        <div className='sticky top-0 mx-2'>
            <div>
                <h2 className='capitalize text-2xl font-bold'>abdullah al mamun</h2>
                <p>Frond end developer</p>
            </div>
            <div className='flex justify-evenly bg-slate-400 rounded-md m-4 p-4'>
                <div>
                    <h1><span className='font-bold text-xl'>56</span>kg</h1>
                    <p>Weight</p>
                </div>
                <div>
                    <h1 className='font-bold text-xl'>5.7</h1>
                    <p>height</p>
                </div>
                <div>
                    <h1><span className='font-bold text-xl'>22</span>yr</h1>
                    <p>age</p>
                </div>
            </div>
            <div>
                <h2 className='capitalize text-xl font-bold mx-4 my-8'>add a break</h2>
                <div>
                    <div className='flex justify-evenly bg-slate-400 rounded-md py-3 mx-2'>
                        <button className='rounded-full focus:bg-slate-600 rounded-full p-2 text-white'>10s</button>
                        <button className='rounded-full focus:bg-slate-600 rounded-full p-2 text-white'>20s</button>
                        <button className='rounded-full focus:bg-slate-600 rounded-full p-2 text-white'>30s</button>
                        <button className='rounded-full focus:bg-slate-600 rounded-full p-2 text-white'>40s</button>
                        <button className='rounded-full focus:bg-slate-600 rounded-full p-2 text-white'>50s</button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='capitalize text-xl font-bold mx-4 my-8'>exercise details</h2>
                <div className='flex justify-evenly bg-amber-100 py-4'>
                    <h3 className='text-lg font-semibold capitalize'>exercise time</h3>
                    <p className='text-slate-600'>200s</p>
                </div>
                <div className='flex justify-evenly bg-amber-100 py-4'>
                    <h3 className='text-lg font-semibold capitalize'>break time</h3>
                    <p className='text-slate-600'>50s</p>
                </div>
            </div>
            <button className='btn w-full bg-green-500 my-8'>activity complete</button>
        </div>
    );
};

export default Intro;