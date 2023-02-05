import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.scss']
})
export class AddTodoFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddTodoFormComponent>) {}

  ngOnInit(): void {
  }

}
