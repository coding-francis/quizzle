import React, { useState, useEffect, useCallback } from 'react'
import { Row, Col, Typography, Modal } from 'antd'
import { GiAlarmClock } from 'react-icons/gi'
import _ from 'lodash'
import { questions } from '../../helpers/questions'
import Layout from '../../layouts/landing'
import logo from '../../assets/logo.png'
import './styles.css'

const Quiz = () => {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [time, setTime] = useState(9)
    const [showModal, setModal] = useState(false)
    const [answers, setAnswers] = useState([])
    const [answerBg, setAnswerBg] = useState('')
    const { Title, Text } = Typography

    const correctAnswer = questions[questionNumber].correctAnswer

    const getQuestions = useCallback(() => {
        const ans = [...questions[questionNumber].incorrectAnswers, questions[questionNumber].correctAnswer]
        const shuffledAnswers = _.shuffle(ans)
        setAnswers(shuffledAnswers)
    }, [questionNumber])

    useEffect(() => {
        getQuestions()
    }, [getQuestions])

    const next = () => {
        const answerBg = document.getElementsByClassName('answer')
        for(let i=0; i<answerBg.length; i++){
            answerBg[i].style.background = '#32167c0d'

        }

        if (questionNumber === questions.length - 1) {
            setModal(true)
        } else {
            setQuestionNumber(questionNumber + 1)
        }
    }

    const checkAnswer = (answer) => {
        if (answer === correctAnswer) {
            document.getElementById(answer).style.background = 'green'
            setTimeout(() => {
                next()
            }, 1500)
        } else {
            const answerBg = document.getElementsByClassName('answer')
            for (let i = 0; i < answerBg.length; i++) {
                if(answerBg[i].children[0].innerHTML === correctAnswer){
                    answerBg[i].style.background = 'green'
                }
            }
            document.getElementById(answer).style.background = 'red'
            setTimeout(() => {
                next()
            }, 1500)
        }
    }

    return (
        <Layout>
            <Row className='quiz-container' gutter={[0, 40]}>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={logo} alt="" width={50} />
                    <Title style={{ color: '#38e9bb', textAlign: 'center', margin: 0 }}>Quizzle</Title>
                </Col>
                <Col span={24} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Title level={4} style={{ margin: 0, padding: 0, color: '#99AFC1' }}>Question {questionNumber + 1}</Title>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                        <GiAlarmClock size={30} color={'#38e9bb'} /> <span className='time-left'>{time}</span>
                    </div>
                </Col>
                <Col span={24} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Title level={4} style={{ margin: 0, padding: 0, color: '#99AFC1' }}>{questions[questionNumber].question}</Title>
                </Col>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: 10 }}>
                    {answers.map((item, id) => (
                        <div key={id} className='answer' id={item} onClick={() => checkAnswer(item)}>
                            <Title level={4} style={{ color: '#99AFC1', margin: 0, padding: 0 }}>{item}</Title>
                        </div>
                    ))}
                </Col>

            </Row>
            <Modal visible={showModal}>

            </Modal>
        </Layout>
    )
}

export default Quiz