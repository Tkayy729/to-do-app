import * as types from "./actionTypes"

export const completeTodo = (todo) => {
    return{
        type: types.COMPLETE_TODO,
        payload: todo
    }
}