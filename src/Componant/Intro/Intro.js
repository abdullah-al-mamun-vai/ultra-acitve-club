import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'


const Intro = ({ cart }) => {
    const [relax, setRelax] = useState(0);
    const [relaxtime, setRelaxTime] = useState(0)
    const handleBreak = (second) => {
        // const newTime = second;
        setRelax(second);
        localStorage.setItem('break', JSON.stringify(second))
    }

    useEffect(() => {

        const getTime = localStorage.getItem('break');
        if (getTime) {
            setRelaxTime(JSON.parse(getTime))
        }

    }, [relax]);
    const handleSweet = () => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        );
    }
    return (
        <div className='sticky top-0 mx-2 py-3'>
            <div>
                <h2 className='capitalize lg:text-2xl md:text-lg font-bold'>abdullah al mamun</h2>
                <p>Frond end developer</p>
            </div>
            <div className='flex justify-evenly bg-slate-400 rounded-md m-4 p-4'>
                <div>
                    <h1><span className='font-bold lg:text-xl md:text-lg sm:text-xl'>56</span>kg</h1>
                    <p>Weight</p>
                </div>
                <div>
                    <h1 className='font-bold lg:text-xl md:text-lg sm:text-xl'>5.7</h1>
                    <p>height</p>
                </div>
                <div>
                    <h1><span className='font-bold lg:text-xl md:text-lg sm:text-xl'>22</span>yr</h1>
                    <p>age</p>
                </div>
            </div>
            <div>
                <h2 className='capitalize text-xl font-bold mx-4 my-8'>add a break</h2>
                <div>
                    <div className='flex justify-evenly bg-slate-400 rounded-md py-3 mx-2'>
                        <button onClick={() => handleBreak(10)} className='rounded-full focus:bg-slate-600 rounded-full p-2 text-white'>10s</button>
                        <button onClick={() => handleBreak(20)} className='rounded-full focus:bg-slate-600 rounded-full p-2 text-white'>20s</button>
                        <button onClick={() => handleBreak(30)} className='rounded-full focus:bg-slate-600 rounded-full p-2 text-white'>30s</button>
                        <button onClick={() => handleBreak(40)} className='rounded-full focus:bg-slate-600 rounded-full p-2 text-white'>40s</button>
                        <button onClick={() => handleBreak(50)} className='rounded-full focus:bg-slate-600 rounded-full p-2 text-white'>50s</button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='capitalize text-xl font-bold mx-4 my-8'>exercise details</h2>
                <div className='flex justify-evenly bg-amber-100 py-4 mt-8'>
                    <h3 className='text-lg font-semibold capitalize'>exercise time</h3>
                    <p className='text-slate-600'>{cart}s</p>
                </div>
                <div className='flex justify-evenly bg-amber-100 py-4 mt-8'>
                    <h3 className='text-lg font-semibold capitalize'>break time</h3>
                    <p className='text-slate-600'>{relaxtime}s</p>
                </div>
            </div>
            <div>
                <button onClick={handleSweet} className='btn w-full bg-green-500 my-8'>activity complete</button>

            </div>


        </div>
    );
};

export default Intro;