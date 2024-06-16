import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import logo from '../../assets/logo.png'

const Welcome = () => {
    return (
        <div className='w-auto custom-shadow rounded-lg py-[60px] px-[60px] border-lg flex flex-col items-center justify-center space-y-[20px] absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]'>
            <div className='flex flex-col justify-center items-center'>
                <img src={logo} alt="Logo" width={70}/>
                <span className='quizzle'>Quizzle</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <span style={{color: '#38e9bb', margin: 0}}>Let's Play!!!</span>
                <span style={{color: '#1F1147', margin: 0}}>Play now and Level up</span>
                <Link to={'/setup'} style={{width: '100%'}}>
                    <button className='border-2 border-transparent bg-lemonGreen text-white font-bold w-full mt-[30px] rounded-lg p-3 hover:bg-transparent hover:border-lemonGreen hover:text-lemonGreen'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Welcome