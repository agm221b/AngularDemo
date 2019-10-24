import { Injectable, OnInit} from '@angular/core';
import { BookingService } from './app.bookingservice';
import { User } from '../_model/app.user';

@Injectable({
    providedIn:'root'
})
export class AuthenticationService implements OnInit{
    user:User;
    constructor(private bookingService:BookingService) { }

    ngOnInit(){
        
    }

  authenticate(username:string, password:string) {
      this.bookingService.getUserDetails(username).subscribe((data:User)=>this.user=data);
    if (username === this.user.username && password === this.user.pass) {
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('usertype',this.user.userType);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}