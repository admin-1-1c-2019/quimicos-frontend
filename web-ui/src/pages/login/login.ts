import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import {Api, User} from '../../providers';
import {HttpHeaders} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string} = {
    email: '',
    password: '',
  };

  constructor(public navCtrl: NavController,
    public user: User,
    public api: Api,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    /*this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })*/
  }

  // Attempt to login in through our User service
  doLogin() {

    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let postData = {
      "email": this.account.email,
      "password": this.account.password
    };

    this.api.post("users/login", postData, {headers: headers, observe: 'response'})
      .subscribe(data => {
        this.navCtrl.push('ContentPage', {
            admin: data["body"].admin,
            authorization: data["headers"].get('authorization')
          });
        }, error => {
          document.querySelector(".login-error-message").innerHTML = error.error.message;
          document.querySelector(".login-error-message").removeAttribute("hidden");
        });

  }

  forgotPasswordRequest() {
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let postData = {
      "email": this.account.email,
      "password": this.account.password
    };

    this.api.post("users/recover_password", postData, {headers: headers})
      .subscribe(data => {
        this.navCtrl.push('ConfirmMailPage');
      }, error => {
        document.querySelector(".login-error-message").innerHTML = error.error.message;
        document.querySelector(".login-error-message").removeAttribute("hidden");
      });
  }
}
