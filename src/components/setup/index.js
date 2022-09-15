import React, { useState } from 'react'
import { Avatar, Segmented, Row, Col, Typography } from 'antd'
import Layout from '../../layouts/landing'
import { BsFillGridFill, BsFillBarChartLineFill } from 'react-icons/bs'
import { FaTachometerAlt } from 'react-icons/fa'
import Categories from './categories'
import Difficulty from './difficulty'
import Limit from './limit'
import './styles.css'


const Setup = () => {
    // States
    const [showCat, setShowCat] = useState(true)
    const [showDif, setShowDif] = useState(false)
    const [showLim, setShowLim] = useState(false)
    const { Title } = Typography
    const boolSetter = (bool1, bool2, bool3) => {
        setShowCat(bool1)
        setShowDif(bool2)
        setShowLim(bool3)
    }
    const Divisions = () => {
   
        return (
            <Row align='middle' justify='center' className='segment'>
                <Col span={8} className={'segment-item'} style={{ background: showCat && '#08001c' , color: showCat ? '#91A2B8' : '#08001c'}} onClick={() => boolSetter(true, false, false)}>
                    <BsFillGridFill size={25}/>
                    <Title level={5} style={{margin: 0, color: showCat ? '#91A2B8' : '#08001c'}}>Category</Title>
                </Col>
                <Col span={8} className={'segment-item'} style={{ background: showDif && '#08001c', color: showDif ? '#91A2B8' : '#08001c'}} onClick={() => boolSetter(false, true, false)}>
                    <FaTachometerAlt size={25}/>
                    <Title level={5} style={{margin: 0, color: showDif ? '#91A2B8' : '#08001c'}}>Difficulty</Title>
                </Col>
                <Col span={8} className={'segment-item'} style={{ background: showLim && '#08001c', color: showLim ? '#91A2B8' : '#08001c'}} onClick={() => boolSetter(false, false, true)}>
                    <BsFillBarChartLineFill size={25}/>
                    <Title level={5} style={{margin: 0, color: showLim ? '#91A2B8' : '#08001c'}}>Limit</Title>
                </Col>
            </Row>
        )
    }
    return (
        <Layout>
            <Col className='fill-up setup-card' xs={24} md={16} lg={18}>
                <Title style={{color: '#91A2B8', textAlign: 'center'}}>Quiz Setup</Title>
                <Divisions />
                {
                    showCat && <Categories nextSegment={boolSetter}/>
                }
                {
                    showDif && <Difficulty nextSegment={boolSetter} />
                }
                {
                    showLim && <Limit nextSegment={boolSetter} />
                }
            </Col>
        </Layout>
    )
}

export default Setup