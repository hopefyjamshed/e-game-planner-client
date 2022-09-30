import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div>
                <div className='first'>
                    <h1 className='ques'>How Does React Works?</h1>
                    <p className='ans'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                </div>
                <div className='second'>
                    <h1 className='ques'>Difference Between Props and State</h1>
                    <p className='ans'><span>props:</span> Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.</p>
                    <p className='ans'><span>state:</span> State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.</p>
                </div>
                <div className='third'>
                    <h1 className='ques'>Other pursposes of 'useeffect' besides API data load</h1>
                    <p className='ans'><span>1:</span> directly updating the DOM, and timers.</p>
                    <p className='ans'><span>2:</span>useEffect accepts two arguments. The second argument is optional. .</p>
                    <p className='ans'><span>3:</span>The useEffect Hook allows you to perform side effects in your components.</p>
                </div>


            </div>
        </div>
    );
};

export default Question;