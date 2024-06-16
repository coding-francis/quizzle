import React, {useState} from 'react'
import {MdOutlineOndemandVideo, MdOutlineScience, MdOutlineSportsBasketball} from 'react-icons/md'
import {BsPalette, BsClockHistory} from 'react-icons/bs'
import {BiLandscape, BiMusic} from 'react-icons/bi'
import {IoFastFoodOutline} from 'react-icons/io5'
import {GiBrain} from 'react-icons/gi'
import {RiHandHeartLine} from 'react-icons/ri'

const Categories = ({nextSegment}) => {
    const [isChecked, setIsChecked] = useState(false)
    const handleChecked = (e) => {
        setIsChecked(!isChecked)
        const targetElement = e.target
        const currentElement = targetElement.closest('.trigger-rounded')

        if (isChecked){
            const checkBox = document.createElement('span');
            checkBox.style.position = 'absolute'
            checkBox.textContent = 'X';
            checkBox.classList.add('checkbox')
            currentElement.appendChild(checkBox);
        }

        console.log(currentElement.getAttribute('data-custom-name'))

    }

    return (
        <div className={'fly-in'}>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-10'>
                <div
                    className={'group relative flex flex-col justify-evenly items-center bg-white rounded-lg px-10 w-52 h-36 cursor-pointer hover:text-red-900  hover:scale-105 transition-all duration-500 shadow-lg trigger-rounded'}
                    data-custom-name={'test'} onClick={handleChecked}>
                    <span className='w-12 h-12 shadow-md flex justify-center items-center custom-rounded text-[24px] group-hover:text-blue-500  group-hover:border-blue-500'><BsPalette/></span>
                    <p className='text-center text-[#000]'>Arts &#38; Literature</p>
                </div>
                <div
                    className={'group relative flex flex-col justify-evenly items-center bg-white rounded-lg px-10 w-52 h-36 cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg trigger-rounded'}
                    data-custom-name={''} onClick={handleChecked}>
                    <span
                        className='w-12 h-12 shadow-md flex justify-center items-center custom-rounded text-[24px] group-hover:text-red-500  group-hover:border-red-500'><MdOutlineOndemandVideo/></span>
                    <p className='text-center text-[#000]'>Film &#38; TV</p>
                </div>
                <div
                    className={'group relative flex flex-col justify-evenly items-center bg-white rounded-lg px-10 w-52 h-36 cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg trigger-rounded'}
                    data-custom-name={''} onClick={handleChecked}>
                    <span
                        className='w-12 h-12 shadow-md flex justify-center items-center custom-rounded text-[24px] group-hover:text-green-500  group-hover:border-green-500'><IoFastFoodOutline/></span>
                    <p className='text-center text-[#000]'>Food &#38; Drinks</p>
                </div>
                <div
                    className={'group relative flex flex-col justify-evenly items-center bg-white rounded-lg px-10 w-52 h-36 cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg trigger-rounded'}
                    data-custom-name={''} onClick={handleChecked}>
                    <span className='w-12 h-12 shadow-md flex justify-center items-center custom-rounded text-[24px] group-hover:text-yellow-500  group-hover:border-yellow-500'><GiBrain/></span>
                    <p className='text-center text-[#000]'>General Knowledge</p>
                </div>
                <div
                    className={'group relative flex flex-col justify-evenly items-center bg-white rounded-lg px-10 w-52 h-36 cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg trigger-rounded'}
                    data-custom-name={''} onClick={handleChecked}>
                    <span
                        className='w-12 h-12 shadow-md flex justify-center items-center custom-rounded text-[24px] group-hover:text-pink-500  group-hover:border-pink-500'><BiLandscape/></span>
                    <p className='text-center text-[#000]'>Geography</p>
                </div>
                <div
                    className={'group relative flex flex-col justify-evenly items-center bg-white rounded-lg px-10 w-52 h-36 cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg trigger-rounded'}
                    data-custom-name={''} onClick={handleChecked}>
                    <span
                        className='w-12 h-12 shadow-md flex justify-center items-center custom-rounded text-[24px] group-hover:text-orange-500  group-hover:border-orange-500'><BsClockHistory/></span>
                    <p className='text-center text-[#000]'>History</p>
                </div>
                <div
                    className={'group relative flex flex-col justify-evenly items-center bg-white rounded-lg px-10 w-52 h-36 cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg trigger-rounded'}
                    data-custom-name={''} onClick={handleChecked}>
                    <span className='w-12 h-12 shadow-md flex justify-center items-center custom-rounded text-[24px] group-hover:text-zinc-500  group-hover:border-zinc-500'><BiMusic/></span>
                    <p className='text-center text-[#000]'>Music</p>
                </div>
                <div
                    className={'group relative flex flex-col justify-evenly items-center bg-white rounded-lg px-10 w-52 h-36 cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg trigger-rounded'}
                    data-custom-name={''} onClick={handleChecked}>
                    <span
                        className='w-12 h-12 shadow-md flex justify-center items-center custom-rounded text-[24px] group-hover:text-lime-500  group-hover:border-lime-500'><MdOutlineScience/></span>
                    <p className='text-center text-[#000]'>Science</p>
                </div>
                <div
                    className={'group relative flex flex-col justify-evenly items-center bg-white rounded-lg px-10 w-52 h-36 cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg trigger-rounded'}
                    data-custom-name={''} onClick={handleChecked}>
                    <span
                        className='w-12 h-12 shadow-md flex justify-center items-center custom-rounded text-[24px] group-hover:text-purple-500  group-hover:border-purple-500'><RiHandHeartLine/></span>
                    <p className='text-center text-[#000]'>Society &#38; Culture</p>
                </div>
                <div
                    className={'group relative flex flex-col justify-evenly items-center bg-white rounded-lg px-10 w-52 h-36 cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg trigger-rounded'}
                    data-custom-name={''} onClick={handleChecked}>
                    <span
                        className='w-12 h-12 shadow-md flex justify-center items-center custom-rounded text-[24px] group-hover:text-red-200  group-hover:border-red-200'><MdOutlineSportsBasketball/></span>
                    <p className='text-center text-[#000]'>Sports &#38; Leisure</p>
                </div>
            </div>
        </div>
    )
}

export default Categories
