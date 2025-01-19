import React, { useState, useEffect, useCallback } from 'react'
import { Row, Col, Typography, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import { GiAlarmClock } from 'react-icons/gi'
import { FaQuestionCircle } from 'react-icons/fa'
import _ from 'lodash'
import Layout from '../../layout'
import logo from '../../assets/logo.png'
import './styles.css'

const Quiz = () => {
    //const questions = []
    //// useStates
    //const [questionNumber, setQuestionNumber] = useState(0)
    //const [time, setTime] = useState(10)
    //const [showModal, setModal] = useState(false)
    //const [answers, setAnswers] = useState([])
    //const [correctCount, setCorrectCount] = useState(0)

    //// navigate
    //const navigate = useNavigate()

    //const { Title, Text } = Typography


    //const correctAnswer = questions[questionNumber].correctAnswer

    //let counter
    //const startTimer = (value) => {
    //    const timer = () => {
    //        if(value <= 9){
    //            setTime('0' + value)
    //        }else{
    //            setTime(value)
    //        }
    //            value--
            
    //        if(value < 0){
    //            next()
    //        }
    //        // if(time === 0){
    //        //     clearInterval(counter)
    //        //     setTime(15)
    //        // }
    //    }
    //    counter = setInterval(timer, 1000)
    //}

    //useEffect(() => {
    //        const ans = [...questions[questionNumber].incorrectAnswers, questions[questionNumber].correctAnswer]
    //        const shuffledAnswers = _.shuffle(ans)
    //        setAnswers(shuffledAnswers)

    //    let timeValue = 10
    //    startTimer(timeValue)
    //}, [questionNumber])

    //const clearer = () => {
    //    setQuestionNumber(questionNumber + 1)
    //    clearInterval(counter)
    //    setTime(10)
    //    // startTimer(time)
    //}

    //const next = () => {
    //    const answerBg = document.getElementsByClassName('answer')
    //    for (let i = 0; i < answerBg.length; i++) {
    //        answerBg[i].classList.remove('isCorrect', 'isWrong')
    //    }

    //    if (questionNumber === questions.length - 1) {
    //        setModal(true)
    //    } else {
    //        clearer()
    //        // setQuestionNumber(questionNumber + 1)
    //    }
    //}

    //const checkAnswer = (answer) => {
    //    if (answer === correctAnswer) {
    //        setCorrectCount(correctCount + 1)
    //        document.getElementById(answer).classList.add('isCorrect')
    //        setTimeout(() => {
    //            next()
    //        }, 1500)
    //    } else {
    //        const answerBg = document.getElementsByClassName('answer')
    //        for (let i = 0; i < answerBg.length; i++) {
    //            if (answerBg[i].innerHTML === correctAnswer) {
    //                answerBg[i].classList.add('isCorrect')
    //            }
    //        }
    //        document.getElementById(answer).classList.add('isWrong')
    //        setTimeout(() => {
    //            next()
    //        }, 1500)
    //    }
    //}

    //const handleCancel = () => {
    //    navigate('/setup')
    //    // dispatcher(category('general_knowledge'))
    //    // dispatcher(limit(5))
    //    // dispatcher(difficulty('hard'))
    //    // dispatcher(questions([]))
    //    setModal(false)
    //}

    return (
        <>
            Hello Quiz
        </>
    )
}

export default Quiz
