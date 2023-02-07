import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() { }

  loginWithGoogle(): void {
    this.authService.GoogleAuth().then(() => {
      this.router.navigate(['/dashboard']);
    });
  }

}
