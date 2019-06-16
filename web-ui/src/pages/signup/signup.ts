import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Api, User } from '../../providers';
import {HttpHeaders} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  account: { name: string, last_name: string, email: string, password: string } = {
    name: '',
    last_name: '',
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController,
    public user: User,
    public api: Api,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    /*this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })*/
  }

  doSignup() {

    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let postData = {
      "first_name": this.account.name,
      "last_name": this.account.last_name,
      "email": this.account.email,
      "password": this.account.password
    };

    this.api.post("users", postData, {headers: headers})
      .subscribe(data => {
        this.navCtrl.push('ConfirmMailPage');
      }, error => {
        document.querySelector(".error-message").innerHTML = error.error.message;
        document.querySelector(".error-message").removeAttribute("hidden");
      });

  }

}
