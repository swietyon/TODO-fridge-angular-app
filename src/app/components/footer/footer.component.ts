import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

}
