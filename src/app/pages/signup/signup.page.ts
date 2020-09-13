import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user: any = {};
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    console.log(this.user);
    this.router.navigate(['/home/dashboard']);
  }
}
