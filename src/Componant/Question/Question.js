import React from 'react';

const Question = () => {
    return (
        <div className="py-14 w-11/12 mx-auto grid lg:grid-cols-2 gap-3  shadow">
            <div className='shadow-xl shadow-stone-500 rounded-lg p-4'>
                <h2 className='capitalize font-semibold text-xl'>how does react work</h2>
                <p>
                    ReactJs is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.
                    It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer
                </p>
            </div>
            <div className='shadow-xl shadow-stone-500 rounded-lg p-4'>
                <h2 className='capitalize font-semibold text-xl'>Difference between State and Props</h2>
                <p>
                    props
                    Props are read-only.Props are immutable.Props allow you to pass data from one component to other components as an argument.Props can be accessed by the child component.Props are used to communicate between components.
                    state
                    State changes can be asynchronous,State is mutable.State holds information about the components.State cannot be accessed by child components.States can be used for rendering dynamic changes with the component.
                </p>
            </div>
            <div className='shadow-xl shadow-stone-500 rounded-lg p-4 h-48'>
                <h2 className='capitalize font-semibold text-xl'>useEffect</h2>
                <p>
                    The useEffect Hook allows you to perform side effects in your components.
                    Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                    useEffect accepts two arguments. The second argument is optional.
                </p>
            </div>
        </div>
    );
};

export default Question;