import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigatonResolverService } from '../navigaton-resolver.service';
export const USER = 'admin';
export const PASSWORD = 'admin123';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // userName: FormControl = new FormControl();
  // password: FormControl = new FormControl();
  userName: string;
  password: string;

  constructor(private navigation: NavigatonResolverService) {}

  ngOnInit() {
    this.navigation.isUserAuthenticated = false;
  }

  public authenticateUser() {
    if (this.userName == USER && this.password == PASSWORD) {
      this.navigation.userType = "ADMIN";
      this.navigation.isUserAuthenticated = true;
      this.navigation.navigationResolver('');
    } else {
      this.navigation.isUserAuthenticated = false;
    }
  }
}
