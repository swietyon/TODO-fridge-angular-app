import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Todo } from 'src/app/shared/services/todo/todo.types';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  todos: Subscription;
  bla$: any;

  constructor(private router: Router, public authService: AuthService) {
    this.todos = this.authService.getTodosFromFirestore().subscribe((state: any) => {
      return state;
    })
    this.bla$ = this.authService.getTodosFromFirestore().pipe(map((state) => { return state }))
  }

  ngOnInit(): void {
  }
}
