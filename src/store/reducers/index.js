import { combineReducers } from 'redux' 
import Category from './category'
import Difficulty from './difficulty'
import Limit from './limit'
import Questions from './questions'

const rootReducer = combineReducers({
    Category,
    Difficulty,
    Limit,
    Questions
})

export default rootReducer