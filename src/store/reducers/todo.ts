import { TodoAction, TodoState, TodoActionTypes } from "../../types/todo";


const initialState: TodoState = {
    todoData: [
        { label: "Drink coffee", id: 1 },
        { label: "Make Awesome App", id: 2 },
        { label: "Have a lunch", id: 3 },
    ]
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch(action.type) {
        case TodoActionTypes.DELETE_TODO: 
            return {todoData: state.todoData.filter((item: any) => item.id !== action.payload)}
        
        case TodoActionTypes.CREATE_TODO: {
            const newTodoData = [...state.todoData, action.payload]; 
            
            return {...state, todoData: newTodoData}
        }
        default:
            return state
    }
}