export default function Limit(state = 5, action) {
  switch (action.type) {
    case 'LIMIT':
      return action.payload
    default: return state
  }
}