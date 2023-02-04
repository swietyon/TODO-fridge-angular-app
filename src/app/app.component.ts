import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navigation: string[] = [
    "FUNKCJA 1",
    "FUNKCJA 2",
    "FUNKCJA 3",
    "FUNKCJA 4",
    "FUNKCJA 5",
    "FUNKCJA 6",
  ]

  constructor(public router: Router) {

  }
}
