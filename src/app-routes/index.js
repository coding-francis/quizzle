import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/login'
import WelcomePage from '../pages/welcome'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<WelcomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
    )
}

export default AppRoutes