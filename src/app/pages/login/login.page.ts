import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: any = {};
  constructor(private router: Router, public authService: AuthenticationService, ) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this.authService.SignIn(email, password)
      .then((res) => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['/home/dashboard']);
        } else {
          window.alert('Email is not verified');
          return false;
        }
      }).catch((error) => {
        window.alert(error.message);
      });
  }
}
