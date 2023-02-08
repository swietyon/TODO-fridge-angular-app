import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Todo } from 'src/app/shared/services/todo/todo.types';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  todos!: Todo[];
  constructor(private router: Router, public authService: AuthService) { 
  }

  ngOnInit(): void {
    this.authService.getTodosFromFirestore().subscribe(todos => {
      this.todos = todos;
  });
  }
}
