export default function Questions(state = [], action) {
    switch (action.type) {
        case 'QUESTIONS':
            return action.payload
        default: return state
    }
}