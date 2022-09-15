import { combineReducers } from 'redux' 
import Category from './category'
import Difficulty from './difficulty'
import Limit from './limit'

const rootReducer = combineReducers({
    Category,
    Difficulty,
    Limit
})

export default rootReducer