import React from 'react'
import { Row, Col, Typography, Button } from 'antd'
import { useDispatch } from 'react-redux'
import {category} from '../../store/actions'
import { MdOutlineOndemandVideo, MdOutlineScience, MdOutlineSportsBasketball } from 'react-icons/md'
import { BsPalette, BsClockHistory } from 'react-icons/bs'
import { BiLandscape, BiMusic } from 'react-icons/bi'
import { IoFastFoodOutline } from 'react-icons/io5'
import { GiBrain } from 'react-icons/gi'
import { RiHandHeartLine } from 'react-icons/ri'

const Categories = ({nextSegment}) => {
    const dispatch = useDispatch()
    const handleChecked = (e) => {
        dispatch(category(e.target.name))
    }

    const { Title, Text } = Typography

    return (
        <Row className='list-categories' gutter={[0, 20]}>
            <Col span={24} className='name-header'>
                <Title level={5} style={{ color: '#91A2B8' }}>Category name</Title>
            </Col>
            <Row gutter={[10, 20]} align='middle' justify='center'>
                <Col xs={24} md={12} className='category-item'>
                    <input type="checkbox" name={'arts_and_literature'} onChange={handleChecked} />
                    <span className='category-icon'><BsPalette size={20} color={'#08001c'}/></span>
                    <Text className='category-text'>Arts &#38; Literature</Text>
                </Col>
                <Col xs={24} md={12} className='category-item'>
                    <input type="checkbox" name={'film_and_tv'} onChange={handleChecked} />
                    <span className='category-icon'><MdOutlineOndemandVideo size={20} color={'#08001c'}/></span>
                    <Text className='category-text'>Film &#38; TV</Text>
                </Col>
                <Col xs={24} md={12} className='category-item'>
                    <input type="checkbox" name={'food_and_drink'} onChange={handleChecked} />
                    <span className='category-icon'><IoFastFoodOutline size={20} color={'#08001c'}/></span>
                    <Text className='category-text'>Food &#38; Drinks</Text>
                </Col>
                <Col xs={24} md={12} className='category-item'>
                    <input type="checkbox" name={'general_knowledge'} onChange={handleChecked} />
                    <span className='category-icon'><GiBrain size={20} color={'#08001c'}/></span>
                    <Text className='category-text'>General Knowledge</Text>
                </Col>
                <Col xs={24} md={12} className='category-item'>
                    <input type="checkbox" name={'geography'} onChange={handleChecked} />
                    <span className='category-icon'><BiLandscape size={20} color={'#08001c'}/></span>
                    <Text className='category-text'>Geography</Text>
                </Col>
                <Col xs={24} md={12} className='category-item'>
                    <input type="checkbox" name={'history'} onChange={handleChecked} />
                    <span className='category-icon'><BsClockHistory size={20} color={'#08001c'}/></span>
                    <Text className='category-text'>History</Text>
                </Col>
                <Col xs={24} md={12} className='category-item'>
                    <input type="checkbox" name={'music'} onChange={handleChecked} />
                    <span className='category-icon'><BiMusic size={20} color={'#08001c'}/></span>
                    <Text className='category-text'>Music</Text>
                </Col>
                <Col xs={24} md={12} className='category-item'>
                    <input type="checkbox" name={'science'} onChange={handleChecked} />
                    <span className='category-icon'><MdOutlineScience size={20} color={'#08001c'}/></span>
                    <Text className='category-text'>Science</Text>
                </Col>
                <Col xs={24} md={12} className='category-item'>
                    <input type="checkbox" name={'society_and_culture'} onChange={handleChecked} />
                    <span className='category-icon'><RiHandHeartLine size={20} color={'#08001c'}/></span>
                    <Text className='category-text'>Society &#38; Culture</Text>
                </Col>
                <Col xs={24} md={12} className='category-item'>
                    <input type="checkbox" name={'sport_and_leisure'} onChange={handleChecked} />
                    <span className='category-icon'><MdOutlineSportsBasketball size={20} color={'#08001c'}/></span>
                    <Text className='category-text'>Sports &#38; Leisure</Text>
                </Col>
                <Col xs={24} md={12} className='next-segment'>
                    <Button className='next-segment-btn' onClick={() => nextSegment(false, true, false)}>Next</Button>
                </Col>
            </Row>
        </Row>
    )
}

export default Categories