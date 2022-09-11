import React from 'react'
import { Row, Col, Card, Typography, Button } from 'antd';
import './styles.css'
import wave from '../../assets/wave.png'

const Welcome = () => {
    const { Title, Text } = Typography
    return (
        <>
            <Row className='welcome-card' align='middle' justify='center' gutter={[0, 30]}>
                <Col span={24} className='upperBg'>
                    <Title className='bigText'>Quizzle</Title>
                </Col>
                <Col span={24} className={'middlefy'} style={{flexDirection: 'column'}}>
                    <img src={wave} alt="waves" className='wavy-image' />
                    <Title level={2} style={{ margin: 0, padding: 0, color: '#fff' }}>Let's Play!</Title>
                    <Text style={{ margin: 0, padding: 0, color: '#fff' }}>Play now and Level up</Text>
                </Col>
                <Col span={24} className={'middlefy'}>
                    <Button className='letsgoBtn'>Let's Go</Button>
                </Col>
            </Row>

        </>
    )
}

export default Welcome