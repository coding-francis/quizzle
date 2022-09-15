import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { limit } from '../../store/actions'
import { marksLimit } from '../../helpers/marks'
import { IoIosCloseCircle } from 'react-icons/io'
import { rules } from '../../helpers/rules'
import { Link } from 'react-router-dom'
import { Slider, Typography, Row, Col, Button, Modal } from 'antd'

const Limit = ({ nextSegment }) => {
  const [value, setValue] = useState(5);
  const [visible, setVisible] = useState(false);
  const [checker, setChecker] = useState(false);
  const { Title, Text } = Typography

  const dispatcher = useDispatch()

  const handleChange = (e) => {
    setValue(e)
    dispatcher(limit(e))
  }
  const handleClose = () => {
    setChecker(false)
    setVisible(false)
  }
  return (

    <Row className='list-categories' gutter={[0, 20]} align={'middle'} justify={'center'}>
      <Col span={24} style={{ background: 'rgba(50, 22, 124,0.1)', borderRadius: 8, padding: '5px 15px' }}>
        <Title level={5} style={{ color: '#91A2B8' }}>Number of Questions</Title>
      </Col>

      <Col span={24} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Slider min={5} max={30} step={5} marks={marksLimit} dots onChange={handleChange} style={{ width: '100%' }} />
      </Col>
      <Col span={24} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Title level={4} style={{ color: '#91A2B8' }}>{value} Questions</Title>
      </Col>
      <Col xs={24} md={12} className='next-segment'>
        <Button className='next-segment-btn' onClick={() => nextSegment(false, true, false)}>Previous</Button>
        <Button className='next-segment-btn' onClick={() => setVisible(true)}>Start</Button>
      </Col>

      <Modal visible={visible} footer={null} closeIcon={<IoIosCloseCircle size={30} color={'#ff000080'} style={{ marginTop: 15 }} />} onCancel={handleClose}>
        <Row gutter={[0, 15]} align={'middle'} justify={'center'}>
          <Col span={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Title level={4} style={{ color: '#08001c' }}>Rules of the Quiz</Title>
          </Col>
          <Col span={24} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {
              rules.map(item => (<Text key={item.id} className='rule' style={{ color: '#08001c' }}><b>{item.id}. </b>{item.name}</Text>))
            }
            
          </Col>
          <Col span={24} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5 }}>
            <div style={{display: 'flex', alignItems: 'center', gap: 5}}>
              <input type={'checkbox'} checked={checker} onChange={() => setChecker(!checker)} style={{width: 15, height: 15}}/>
              <label htmlFor="checkbox">I have read and understood the terms and rules of this quiz.</label>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 5}}>
              <input type={'checkbox'} checked={checker} onChange={() => setChecker(!checker)} style={{width: 15, height: 15}}/>
              <label htmlFor="checkbox">I AGREE TO START.</label>
            </div>

          </Col>
          <Col span={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to={'/quiz'} style={{ width: '50%' }}>
              <Button className='letsgobtn' style={{ display: checker ? 'block' : 'none' }}>Let's Go!</Button>
            </Link>
          </Col>
        </Row>
      </Modal>
    </Row>
  )
}

export default Limit