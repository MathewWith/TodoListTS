export enum TodoActionTypes {
    DELETE_TODO = 'DELETE_TODO',
    CREATE_TODO = 'CREATE_TODO',
}

interface DeleteTodo {
    type: TodoActionTypes.DELETE_TODO,
    payload: number
}

interface CreateTodo {
    type: TodoActionTypes.CREATE_TODO,
    payload: TodoStateItem
}

export type TodoAction = DeleteTodo | CreateTodo;

export interface TodoState {
    todoData: TodoStateItem[] 
}

export interface TodoStateItem {
    label: string,
    id: number
}