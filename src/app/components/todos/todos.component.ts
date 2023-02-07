import { Component, OnInit } from '@angular/core';
import { getTodos, todoStore } from 'src/app/shared/services/todo/todo.repository';
import { TodoService } from 'src/app/shared/services/todo/todo.service';
import { Todo } from 'src/app/shared/services/todo/todo.types';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  allTodos!: Todo[];
  todosLength: number = 0;

  constructor(public todoService: TodoService) {
    this.allTodos = getTodos().todos;
    todoStore.subscribe((state: any) => {
      this.allTodos = state.todos;
      this.todosLength = state.todos.length;
    });
  }

  ngOnInit(): void {
  }

  deleteTodo(todoId: string) {
    this.todoService.deleteTodo(todoId);
  }

  setTodo(todoId: string) {
    this.todoService.setTodo(todoId);
  }
}