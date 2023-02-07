import { Component } from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo/todo.service';
import { Priority } from 'src/app/shared/services/todo/todo.types';


@Component({
  selector: 'app-edit-todo-form',
  templateUrl: './edit-todo-form.component.html',
  styleUrls: ['./edit-todo-form.component.scss']
})
export class EditTodoFormComponent {
  priorities = Priority;

  constructor(public todoService: TodoService) {
  }
}
