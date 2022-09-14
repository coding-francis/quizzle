import React from 'react'
import { Row } from 'antd'

const Landing = ({children}) => {
    const styles = {
        width: '100%',
        height: 'auto',
      background: '#08001c'
    }
  return (
    <Row align='middle' justify='center' style={styles}>
        {children}
    </Row>
  )
}

export default Landing