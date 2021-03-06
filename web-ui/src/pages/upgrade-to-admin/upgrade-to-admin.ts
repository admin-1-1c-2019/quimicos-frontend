import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';

import {Api, User} from '../../providers';
import {HttpHeaders} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'upgrade-to-admin.html'
})
export class UpgradeToAdminPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  authorization: string;
  account: { email: string} = {
    email: '',
  };

  constructor(public navCtrl: NavController,
              public user: User,
              public api: Api,
              public toastCtrl: ToastController,
              public translateService: TranslateService,
              public navParams: NavParams) {

    /*this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })*/
  }

  // Attempt to login in through our User service
  upgradeToAdmin() {

    var headers = new HttpHeaders().set("Authorization", this.navParams.get('authorization')).set("Content-Type", 'application/json');

    let postData = {
      "email": this.account.email,
    };

    this.api.put("users/admin", postData, {headers: headers})
      .subscribe((data) => {
        document.querySelector(".ok-message").innerHTML = "El usuario <strong>" + this.account.email + "</strong> ahora es administrador";
        document.querySelector(".ok-message").removeAttribute("hidden");
        document.querySelector(".error-message").setAttribute("hidden", "");
      }, error => {
          document.querySelector(".error-message").innerHTML = "Error al ejecutar la operación";
          document.querySelector(".error-message").removeAttribute("hidden");
        });

  }

}
