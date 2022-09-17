import React, { useState, useEffect, useCallback } from 'react'
import { Row, Col, Typography, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import { limit, category, difficulty, questions } from '../../store/actions'
import { GiAlarmClock } from 'react-icons/gi'
import { FaQuestionCircle } from 'react-icons/fa'
import _ from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../../layouts/landing'
import logo from '../../assets/logo.png'
import './styles.css'

const Quiz = () => {
    // Redux States
    const { Questions: questions } = useSelector(state => state)

    // useStates
    const [questionNumber, setQuestionNumber] = useState(0)
    const [time, setTime] = useState(10)
    const [showModal, setModal] = useState(false)
    const [answers, setAnswers] = useState([])
    const [correctCount, setCorrectCount] = useState(0)

    // navigate
    const navigate = useNavigate()

    // dispatcher
    const dispatcher = useDispatch()
    const { Title, Text } = Typography

    const correctAnswer = questions[questionNumber].correctAnswer

    const getQuestions = useCallback(() => {
        const ans = [...questions[questionNumber].incorrectAnswers, questions[questionNumber].correctAnswer]
        const shuffledAnswers = _.shuffle(ans)
        setAnswers(shuffledAnswers)
    }, [questionNumber, questions])

    let counter
    const startTimer = (time) => {
        const timer = () => {
            if(time <= 9){
                setTime('0' + time)
            }else{
                setTime(time)
            }
                time--
            console.log(time)

            if(time === 0){
                clearInterval(counter)
                setTime(15)
            }
        }
        counter = setInterval(timer, 1000)
    }

    useEffect(() => {
        getQuestions()
        startTimer(time)
    }, [getQuestions])

    const next = () => {
        const answerBg = document.getElementsByClassName('answer')
        for (let i = 0; i < answerBg.length; i++) {
            answerBg[i].classList.remove('isCorrect', 'isWrong')
        }

        if (questionNumber === questions.length - 1) {
            setModal(true)
        } else {
            setQuestionNumber(questionNumber + 1)
        }
    }

    const checkAnswer = (answer) => {
        if (answer === correctAnswer) {
            setCorrectCount(correctCount + 1)
            document.getElementById(answer).classList.add('isCorrect')
            setTimeout(() => {
                next()
            }, 1500)
        } else {
            const answerBg = document.getElementsByClassName('answer')
            for (let i = 0; i < answerBg.length; i++) {
                if (answerBg[i].innerHTML === correctAnswer) {
                    answerBg[i].classList.add('isCorrect')
                }
            }
            document.getElementById(answer).classList.add('isWrong')
            setTimeout(() => {
                next()
            }, 1500)
        }
    }

    const handleCancel = () => {
        navigate('/setup')
        dispatcher(category('general_knowledge'))
        dispatcher(limit(5))
        dispatcher(difficulty('hard'))
        dispatcher(questions([]))
        setModal(false)
    }

    return (
        <Layout>
            <Row className='quiz-container' gutter={[0, 40]}>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={logo} alt="" width={50} />
                    <Title style={{ color: '#38e9bb', textAlign: 'center', margin: 0 }}>Quizzle</Title>
                </Col>
                <Col span={24} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Title level={4} style={{ margin: 0, padding: 0, color: '#99AFC1', display: 'flex', alignItems: 'center', gap: 6 }}><FaQuestionCircle size={30} />Question {questionNumber + 1}</Title>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                        <GiAlarmClock size={30} color={'#38e9bb'} /> <span className='time-left'>{time}</span>
                    </div>
                </Col>
                <Col span={24} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ margin: 0, padding: 0, color: '#99AFC1', fontSize: 20 }}>{questions[questionNumber].question}</Text>
                </Col>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: 10 }}>
                    {answers.map((item, id) => (
                        <div key={id} className='answer' id={item} onClick={() => checkAnswer(item)}>
                            {item}
                        </div>
                    ))}
                </Col>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: 10 }}>
                    <Text style={{ color: '#38e9bb', margin: 0, fontSize: 20 }}>Answered questions: <b>{questionNumber}</b></Text>
                    <Text style={{ color: '#38e9bb', margin: 0, fontSize: 20 }}>Correctly answered: <b>{correctCount}</b></Text>
                </Col>
            </Row>
            <Modal open={showModal} onCancel={handleCancel}>

            </Modal>
        </Layout>
    )
}

export default Quiz
