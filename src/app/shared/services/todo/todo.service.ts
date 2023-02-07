import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Todo, Priority, originalEmptyTodo } from 'src/app/shared/services/todo/todo.types';
import { getTodos, todoStore, addTodo, deleteTodo, updateTodo } from './todo.repository';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  newTodo: Todo = {
    id: uuidv4(),
    title: '',
    todoText: '',
    date: new Date(),
    priority: Priority.low,
  };

  isAddingPopupDisplayed = false;
  priorities = Priority;
  allTodos!: Todo[];
  todosLength = 0;

  constructor() {
    const todos = getTodos();
    this.allTodos = todos.todos;
    todoStore.subscribe((state:any) => {
      this.allTodos = state.todos;
      this.todosLength = state.todos.length;
    });
  }

  getTodos() {
    return getTodos();
  }

  addTodo(passedTodo: Todo) {
    const todo = { ...passedTodo };
    if (todo.title.length === 0 && todo.todoText.length === 0) {
      console.log('couldnt add todo');
    } else {
      addTodo(todo);
    }
    this.newTodo = { ...originalEmptyTodo };
  }

  deleteTodo(todoId: string) {
    deleteTodo(todoId);
  }

  setTodo(todoId: string) {
    const selectedTodo = this.allTodos.find((todo) => todo.id === todoId);
    if (selectedTodo) {
      this.newTodo = { ...selectedTodo };
      return true;
    } else {
      return false;
    }
  }

  updateTodo() {
    updateTodo(this.newTodo);
  }

  prioritySelection(event: any) {
    this.newTodo.priority = event.value;
  }
}
