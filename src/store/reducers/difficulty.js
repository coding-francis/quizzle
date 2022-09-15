export default function Difficulty(state = 'easy', action) {
    switch (action.type) {
        case 'DIFFICULTY':
            return action.payload
        default: return state
    }
}