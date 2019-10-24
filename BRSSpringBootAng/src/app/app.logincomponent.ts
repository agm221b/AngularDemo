import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { AuthenticationService } from './_service/app.authenticationservice';
import { BookingService } from './_service/app.bookingservice';
import { User } from './_model/app.user';

@Component({
  selector: 'login',
  templateUrl: './_html/app.login.html'
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  invalidLogin = false;

  constructor(private router: Router, private loginService: AuthenticationService) { }

  ngOnInit() {

  }

  checkLogin() {
    if (this.loginService.authenticate(this.username, this.password)
    ) {
      let usertype = sessionStorage.getItem('usertype');
      if (usertype == 'A') {
        this.router.navigate(['/adminhome'])
        this.invalidLogin = false
      }
      else{
        this.router.navigate(['/customerhome'])
      this.invalidLogin = false
      }

    } else
      this.invalidLogin = true
  }


}