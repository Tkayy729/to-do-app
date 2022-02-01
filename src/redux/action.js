import * as types from "./actionTypes"


export const completeTodo = (todos) => {
    return{
        type: types.COMPLETE_TODO,
        payload: todos
    }
}
export const addTodo = (todos) =>{
    return {
        type: types.ADD_TODO,
        payload: todos

    }
}