export const category = (data) => {
    return {
        type: 'CATEGORY',
        payload: data
    }
}

export const difficulty = (data) => {
    return {
        type: 'DIFFICULTY',
        payload: data
    }
}
export const limit = (data) => {
    return {
        type: 'LIMIT',
        payload: data
    }
}
export const questions = (data) => {
    return {
        type: 'QUESTIONS',
        payload: data
    }
}