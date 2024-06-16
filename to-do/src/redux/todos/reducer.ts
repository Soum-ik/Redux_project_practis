import initialState, { state } from './initialState';
import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSTATUS, DELETED, COMPLETED } from './actionsTypes';


const nextTodos = (todos: state) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id + maxId))
    return maxId + 1

}

const todosReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodos(action)
                }
            ]

        case DELETED:
            return state.filter(todo => todo.id !== action.payload)

        case COMPLETED:
            return state.map((todo) => {
                if (todo.id !== action.payload) {
                    return todo
                }

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })

        case ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })

        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed)

        case COLORSTATUS:
            const { todoId, color } = action.payload;
            return state.map((todo) => {
                if (todo.id !== todoId) {
                    return todo
                }

                return {
                    ...todo,
                    color: color
                }
            })



        default:
            return state
    }
}

export default todosReducer