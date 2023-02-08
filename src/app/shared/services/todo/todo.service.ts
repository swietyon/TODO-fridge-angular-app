import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Todo, Priority, originalEmptyTodo } from 'src/app/shared/services/todo/todo.types';
import { getTodos, todoStore, addTodo, deleteTodo, updateTodo, isTodoInStore, getUserUid } from './todo.repository';
import { AuthService } from '../auth/auth.service';

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
    userId: ''
  };

  isAddingPopupDisplayed = false;
  priorities = Priority;
  allTodos!: Todo[];
  todosLength = 0;

  constructor(private authService: AuthService) {
    const todos = getTodos();
    this.allTodos = todos.todos;
    todoStore.subscribe((state: any) => {
      this.allTodos = state.todos;
      this.todosLength = state.todos.length;
    });
  }

  getTodos() {
    return getTodos();
  }

  async addTodo(passedTodo: Todo) {
    const todo = { ...passedTodo };
    if (todo.title.length === 0 && todo.todoText.length === 0) {
      console.log('couldnt add todo');
    } else {
      // const res = await db.collection('todos').doc('LA').set(todo);
      addTodo(todo);
      this.newTodo = { ...originalEmptyTodo };
      this.authService.addTodoToFirestore(todo)
    }
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
    // this.authService.editTodoInFirestore(this.newTodo.id, this.newTodo);
  }

  prioritySelection(event: any) {
    this.newTodo.priority = event.value;
  }

  isTodoInStore(passedId: string) {
    return isTodoInStore(passedId)
  }

  stopEditing() {
    this.newTodo = { ...originalEmptyTodo };
  }
}
