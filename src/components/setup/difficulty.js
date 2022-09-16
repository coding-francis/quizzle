import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { difficulty } from '../../store/actions'
import { marksDifficulty } from '../../helpers/marks'
import { Slider, Typography, Row, Col, Button } from 'antd'

const Difficulty = ({ nextSegment }) => {
  const [value, setValue] = useState(0);
  const { Title, Text } = Typography

  const dispatcher = useDispatch()
  const levels = ['Easy', 'Medium', 'Hard']

  const handleChange = (e) => {
    setValue(e)
    dispatcher(difficulty(levels[e].toLowerCase()))
  }
  return (

    <Row className='list-categories' gutter={[0, 20]} align={'middle'} justify={'center'}>
      <Col className = 'name-header'>
        <Title level={5} style={{ color: '#91A2B8' }}>Difficulty Level</Title>
      </Col>

      <Col span={24} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Slider min={0} max={2} marks={marksDifficulty} dots onChange={handleChange} style={{ width: '100%' }} />
      </Col>
      <Col span={24} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Title level={4} style={{ color: '#91A2B8' }}>{levels[value]}</Title>
      </Col>
      <Col xs={24} md={12} className='next-segment'>
        <Button className='next-segment-btn' onClick={() => nextSegment(true, false, false)}>Previous</Button>
        <Button className='next-segment-btn' onClick={() => nextSegment(false, false, true)}>Next</Button>
      </Col>
    </Row>
  )
}

export default Difficulty