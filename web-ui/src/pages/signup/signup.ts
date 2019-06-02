import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Api, User } from '../../providers';

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

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let postData = {
      "name": this.account.name,
      "last_name": this.account.last_name,
      "email": this.account.email,
      "password": this.account.password
    };

    Api.prototype.post("users", postData, headers)
      .subscribe(data => {
        console.log(data['_body']);
        //TODO: push home page
      }, error => {
        console.log(error);
      });

  }

}
