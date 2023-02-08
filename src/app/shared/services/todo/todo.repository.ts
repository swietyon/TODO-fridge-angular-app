import { createStore, withProps } from '@ngneat/elf';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from "./todo.types";

export interface TodoState {
    todos: Todo[];
}

const initialTodoState: TodoState = {
    todos: [],
}

export const todoStore = createStore(
    { name: 'todos' },
    withProps<TodoState>(
        initialTodoState
    )
)

export const getUserUid = () => {
    // const user = JSON.parse(localStorage.getItem('user')!);
    // if(user.uid !== null) {
    //     return user.uid;
    // }
    // else {
    //     return '';
    // }
  }

export const addTodo = (todo: Todo) => {
    todoStore.update((state) => ({
        ...state,
        todos: [...state.todos, { ...todo, id: uuidv4() }]
    }));
}

export const getTodos = () => {
    return todoStore.getValue();
}

export const deleteTodo = (uuid: string) => {
    todoStore.update((state) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== uuid)
    }));
}

export const updateTodo = (updatedTodo: Todo) => {
    todoStore.update((state) => {
        const todoIndex = state.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (todoIndex === -1) {
            return state;
        }
        const newTodos = [...state.todos];
        newTodos[todoIndex] = updatedTodo;
        return {
            ...state,
            todos: newTodos,
        };
    });
};

export const isTodoInStore = (id: string) => {
    const state = todoStore.getValue();
    return state.todos.some(todo => todo.id === id);
};
