import React from 'react'
import { Row, Col, Card, Typography, Button } from 'antd';
import './styles.css'
import wave from '../../assets/wave.png'

const Welcome = () => {
    const { Title, Text } = Typography
    return (
        <Row className='welcome-card' align='middle' justify='center'>
            <Col span={24} className='upperBg'>
                <Title className='bigText'>Quizzle</Title>
            </Col>
            <Col span={24}>
                <img src={wave} alt="waves" className='wavy-image' />

            </Col>
            <Row gutter={[52, 52]}>
                <Col style={{ textAlign: 'center' }}>
                    <Title level={2} style={{ margin: 0, padding: 0, color: '#fff' }}>Let's Play!</Title>
                    <Text style={{ margin: 0, padding: 0, color: '#fff' }}>Play now and Level up</Text>
                </Col>
                <Button className='letsgoBtn'>Let's Go</Button>
            </Row>
        </Row>
    )
}

export default Welcome