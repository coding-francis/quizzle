export default function Category(state = 'general_knowledge', action) {
    switch (action.type) {
        case 'CATEGORY':
            return action.payload
        default: return state
    }
}