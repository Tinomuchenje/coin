import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    phone_number: '',
    password: ''
  };

  url = 'http://thecoinbase.co.za/api/login.php';

  constructor(private router: Router, private http: HttpClient ) { }

  ngOnInit() {
  }
  login() {
    this.http.post(this.url, this.user).toPromise().then(data => {
      console.log(data);
      console.log(this.user);
      this.router.navigate(['home']);
    });
  }
}
