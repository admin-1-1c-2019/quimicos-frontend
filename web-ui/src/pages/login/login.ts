import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import {Api, User} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'tpproyectos1@gmail.com',
    password: 'TPAdmin2019!'
  };

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    /*this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })*/
  }

  // Attempt to login in through our User service
  doLogin() {

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let postData = {
      "email": this.account.email,
      "password": this.account.password
    };

    Api.prototype.post("/users/login", postData, headers)
      .subscribe(data => {
        console.log(data['_body']);
        //TODO: push home page
      }, error => {
        console.log(error);
        document.querySelector(".login-error-message").removeAttribute("hidden");
      });

  }

  forgotPasswordRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let postData = {
      "email": this.account.email,
      "password": this.account.password
    };

    Api.prototype.post("/users/recover_password", postData, headers)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });
  }
}
