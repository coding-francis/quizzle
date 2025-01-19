import React, { useEffect, useState } from 'react';
import selectedCheckMark from '../../assets/selected-check.png'
import { MdOutlineOndemandVideo, MdOutlineScience, MdOutlineSportsBasketball } from 'react-icons/md';
import { BsPalette, BsClockHistory, BsBook, BsDisplay, BsLaptop, BsCalculator, BsPeople, BsCar, BsPhoneFill } from 'react-icons/bs';
import { BiLandscape, BiMusic } from 'react-icons/bi';
import { IoFastFoodOutline, IoGameControllerOutline } from 'react-icons/io5';
import { GiBrain, GiTheaterCurtains, GiMeepleGroup, GiGreekTemple, GiCat, GiJapan, GiPolitics } from 'react-icons/gi';
import { RiHandHeartLine } from 'react-icons/ri';
import { MdOutlineAnimation } from 'react-icons/md'
import { FaRandom } from "react-icons/fa";
import { useAtom } from 'jotai';
import { category as Category } from '../../store'
import SetupOptions from '../common/SetupOptions';

const Categories = ({    }) => {
    const categories = [
        { icon: FaRandom, name: 'Random', color: 'teal', id: '', isDefault: true },
        { icon: GiBrain, name: 'General Knowledge', color: 'yellow', id: '9' },
        { icon: BsBook, name: 'Entertainment: Books', color: 'purple', id: '10' },
        { icon: MdOutlineOndemandVideo, name: 'Entertainment: Film', color: 'red', id: '11' },
        { icon: BiMusic, name: 'Entertainment: Music', color: 'zinc', id: '12' },
        { icon: GiTheaterCurtains, name: 'Entertainment: Musicals & Theatres', color: 'purple', id: '13' },
        { icon: BsDisplay, name: 'Entertainment: Television', color: 'teal', id: '14' },
        { icon: IoGameControllerOutline, name: 'Entertainment: Video Games', color: 'green', id: '15' },
        //{ icon: GiMeepleGroup, name: 'Entertainment: Board Games', color: 'amber', id: '16' },
        { icon: MdOutlineScience, name: 'Science & Nature', color: 'lime', id: '17' },
        { icon: BsLaptop, name: 'Science: Computers', color: 'cyan', id: '18' },
        { icon: BsCalculator, name: 'Science: Mathematics', color: 'indigo', id: '19' },
        { icon: GiGreekTemple, name: 'Mythology', color: 'rose', id: '20' },
        { icon: MdOutlineSportsBasketball, name: 'Sports', color: 'red-200', id: '21' },
        { icon: BiLandscape, name: 'Geography', color: 'pink', id: '22' },
        { icon: BsClockHistory, name: 'History', color: 'orange', id: '23' },
        //{ icon: GiPolitics, name: 'Politics', color: 'gray', id: '24' },
        { icon: BsPalette, name: 'Art', color: 'blue', id: '25' },
        { icon: BsPeople, name: 'Celebrities', color: 'fuchsia', id: '26' },
        { icon: GiCat, name: 'Animals', color: 'emerald', id: '27' },
        //{ icon: BsCar, name: 'Vehicles', color: 'slate', id: '28' },
        { icon: BsBook, name: 'Entertainment: Comics', color: 'violet', id: '29' },
        { icon: BsPhoneFill, name: 'Science: Gadgets', color: 'sky', id: '30' },
        { icon: GiJapan, name: 'Entertainment: Japanese Anime & Manga', color: 'pink', id: '31' },
        { icon: MdOutlineAnimation, name: 'Entertainment: Cartoon & Animations', color: 'amber', id: '32' }
    ];

    const [category, setCategory] = useAtom(Category)
    
    return (
        <SetupOptions choice={category} setChoice={setCategory} optionsData={categories}/>
    );
};

export default Categories;