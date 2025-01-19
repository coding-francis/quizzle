import React, { useEffect, useState } from 'react';
import selectedCheckMark from '../../assets/selected-check.png'

const SetupOptions = ({ choice, setChoice, optionsData}) => {
    const handleSelect = (itemId) => {
        setChoice(itemId === choice ? null : itemId);
    };
console.log(choice)
    return (
        <div className="fly-in">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-10">
                {optionsData.map(({ id, icon: Icon, name, color, isDefault,  }) => (
                    <div
                        key={id}
                        className={`group relative flex flex-col justify-evenly items-center bg-white rounded-lg px-10 max-w-10 w-full h-36 cursor-pointer hover:scale-105 transition-all duration-500 shadow-lg ${isDefault ? 'border-2 border-red-400 bg-slate-100' : ''}`}
                        onClick={() => handleSelect(id)}
                    >
                        <span className={`w-12 h-12 shadow-md flex justify-center items-center custom-rounded text-[24px] group-hover:text-${color}-500 group-hover:border-${color}-500`}>
                            <Icon />
                        </span>
                        <p className="text-center text-[#000]">{name}</p>
                        {choice === id && (
                            <div className="absolute -top-2 -right-2 z-10 rounded-full bg-white text-green-500">
                                <img src={selectedCheckMark} width={30} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SetupOptions;