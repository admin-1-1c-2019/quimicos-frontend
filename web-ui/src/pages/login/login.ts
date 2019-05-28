import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';

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
    email: 'test@example.com',
    password: 'test'
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

    //Request to Backend login endpoint

    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      document.querySelector(".login-error-message").removeAttribute("hidden");
    });
  }

  forgotPasswordRequest() {
    //Request to Backend password recovery endpoint
  }
}
