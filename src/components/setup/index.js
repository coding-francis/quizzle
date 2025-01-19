import React, { useEffect, useState } from 'react';
import './styles.css';
import Categories from './categories';
import Difficulty from './difficulty';
import Limit from './limit';
import { useNavigate } from 'react-router-dom';

const SetupComponent = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        localStorage.removeItem('category')
        localStorage.removeItem('difficulty')
        localStorage.removeItem('limit')
    },[])
    const [progress, setProgress] = useState(0);

    const handlePrev = () => {
        setProgress((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        if(progress === 2) navigate('/quiz')
        setProgress((prev) => prev + 1);
    };

    return (
        <div className=''>
            <div className='flex justify-between items-center'>
                <h1 className={'text-[#99AFC1] font-bold text-3xl'}>Quiz Setup</h1>
                <div className='flex gap-2'>
                    <button
                        onClick={handlePrev}
                        className={`flex justify-center items-center border-2 hover:text-[#99AFC1] transition duration-500 px-3 py-1 rounded-lg ${progress === 0 ? 'hidden' : 'block'
                            }`}
                    >
                        Prev
                    </button>
                    <button
                        onClick={handleNext}
                        className='flex justify-center items-center border-2 hover:text-[#99AFC1] transition duration-500 px-3 py-1 rounded-lg'
                    >
                        {progress === 2 ? 'Continue' : 'Next'}
                    </button>
                </div>
            </div>
            {progress === 0 ? (
                <Interface title={'Choose a category'} progress={progress}>
                    <Categories />
                </Interface>
            ) :
                progress === 1 ? (
                    <Interface title={'Set difficulty level'} progress={progress}>
                        <Difficulty />
                    </Interface>
                )
                    :
                    progress === 2 && (
                        <Interface title={'Set number of questions'} progress={progress}>
                            <Limit />
                        </Interface>
                    )
            }
        </div>
    );
};

const Interface = (props) => {
    return (
        <div className=''>
            <h3 className={'text-xl my-3'}>{props.title}</h3>
            {props.children}
        </div>
    );
};

const Setup = () => {
    return (
        <div className='py-10'>
            <SetupComponent />
        </div>
    );
};

export default Setup;
