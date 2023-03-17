import { Dispatch } from "react"
import { TodoAction, TodoActionTypes, TodoStateItem } from "../../types/todo"

export const deleteTodo = (id: number) => {
    return async (dispatch: Dispatch<TodoAction>) => {
            dispatch({type: TodoActionTypes.DELETE_TODO, payload: id})
    }
}

export const createTodo = (todo: TodoStateItem): TodoAction => {
    return {type: TodoActionTypes.CREATE_TODO, payload: todo}
}