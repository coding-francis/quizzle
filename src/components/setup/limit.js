import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { limit as Limits } from '../../store'
import { FaMinus, FaPlus } from "react-icons/fa";

const Limit = ({ }) => {
    const [limit, setLimit] = useAtom(Limits)
    const [disableMinus, setDisableMinus] = useState(false)
    const [disablePlus, setDisablePlus] = useState(false)

    useEffect(() => {
        if (limit === 5){setDisableMinus(prev => prev = true)}
        else { setDisableMinus(prev => prev = false) }

        if (limit === 30) { setDisablePlus(prev => prev = true) }
        else { setDisablePlus(prev => prev = false) }
}, [limit])
    return (
        <div className='flex items-center space-x-8 justify-center md:justify-start'>
            <button className={`w-16 h-16 shadow-md flex justify-center items-center custom-rounded text-[24px] group-hover:text-black group-hover:border-black`} onClick={() => setLimit(prev => prev - 5)} disabled={disableMinus}>
                <FaMinus size={20} />
            </button>
            <span className={`w-20 h-20 text-4xl flex justify-center items-center custom-rounded text-[24px] group-hover:text-black group-hover:border-black`}>
                {limit}
            </span>
            <button className={`w-16 h-16 shadow-md flex justify-center items-center custom-rounded text-[24px] group-hover:text-black group-hover:border-black`} onClick={() => setLimit(prev => prev + 5)} disabled={disablePlus}>
                <FaPlus size={20} />
            </button>
        </div>
    );
};

export default Limit;