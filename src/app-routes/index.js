import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/login'
import WelcomePage from '../pages/welcome'
import SetupPage from '../pages/setup'
import QuizPage from '../pages/quiz'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<WelcomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/setup' element={<SetupPage/>}/>
            <Route path='/quiz' element={<QuizPage/>}/>
        </Routes>
    )
}

export default AppRoutes