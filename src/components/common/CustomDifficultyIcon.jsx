import React from "react";
import Easy from '../../assets/easy.jpeg'
import Medium from '../../assets/medium.jpeg'
import Hard from '../../assets/hard.jpeg'

export const EasyIcon = () => {
    return (
        <img src={Easy} className="w-72"/>
    );
}

export const MediumIcon = () => {
    return (
        <img src={Medium} />
    );
}

export const HardIcon = () => {
    return (
        <img src={Hard} />
    );
}