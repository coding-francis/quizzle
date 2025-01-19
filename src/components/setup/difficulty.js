import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { difficulty as DifficultyLevel } from '../../store'
import SetupOptions from '../common/SetupOptions';
import {EasyIcon, MediumIcon, HardIcon} from '../common/CustomDifficultyIcon'

const Difficulty = ({ }) => {
    const difficulties = [
        { icon: EasyIcon, name: 'Easy', color: 'teal', id: 'easy' },
        { icon: MediumIcon, name: 'Medium', color: 'yellow', id: 'medium' },
        { icon: HardIcon, name: 'Hard', color: 'yellow', id: 'hard' },
    
    ];

    const [difficulty, setDifficulty] = useAtom(DifficultyLevel)

    return (
        <SetupOptions choice={difficulty} setChoice={setDifficulty} optionsData={difficulties} />
    );
};

export default Difficulty;