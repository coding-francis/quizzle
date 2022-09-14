import React from 'react'
import { Row, Col, Card, Typography, Button } from 'antd';
import { Link } from 'react-router-dom'
import './styles.css'
import logo from '../../assets/logo.png'

const Welcome = () => {
    const { Title, Text } = Typography
    return (
        <Row className='jumbotron' align='middle' justify='center'>
            <Col xs={24} md={12} lg={7} className='welcome-card '>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={logo} alt="Logo" width={70} />
                    <Title className='quizzle'>Quizzle</Title>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Title level={4} style={{ color: '#38e9bb', margin: 0 }}>Let's Play!!!</Title>
                    <Title level={5} style={{ color: '#1F1147', margin: 0 }}>Play now and Level up</Title>
                    <Link to={'/setup'}>
                        <Button className='get-started-btn'>Get Started</Button>
                    </Link>
                </div>
            </Col>
        </Row>
    )
}

export default Welcome