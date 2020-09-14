import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user: any = {};
  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  signUp(email, password) {
    this.authService.RegisterUser(email, password)
      .then((res) => {
        this.authService.SendVerificationMail();
        this.router.navigate(['verify-email']);
      }).catch((error) => {
        window.alert(error.message);
      });
  }
}
