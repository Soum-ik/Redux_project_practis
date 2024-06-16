import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSTATUS, DELETED, COMPLETED } from './actionsTypes';

export const added = (todoText: String) => {
    return {
        type: ADDED,
        payload: todoText
    }
}

export const deleted = (todoID: Number) => {
    return {
        type: DELETED,
        payload: todoID
    }
}

export const completed = (todoID: Number) => {
    return {
        type: COMPLETED,
        payload: todoID
    }
}

export const allcompleted = () => {
    return {
        type: ALLCOMPLETED,
    }
}
export const clearcompleted = () => {
    return {
        type: CLEARCOMPLETED,
    }
}

export const colorstatus = (todoId: Number, color: String) => {
    return {
        type: COLORSTATUS,
        payload: {
            todoId, color
        }
    }
}