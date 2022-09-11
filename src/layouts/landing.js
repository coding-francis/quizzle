import React from 'react'

const Landing = ({children}) => {
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh'
    }
  return (
    <div style={styles}>
        {children}
    </div>
  )
}

export default Landing