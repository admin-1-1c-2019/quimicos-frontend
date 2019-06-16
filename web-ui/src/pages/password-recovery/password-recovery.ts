import {IonicPage, NavController, ToastController} from "ionic-angular";
import {Component} from "@angular/core";
import {Api, User} from "../../providers";
import {TranslateService} from "@ngx-translate/core";
import {HttpHeaders} from "@angular/common/http";

@IonicPage({
  segment: 'password-recovery/:authorization'
})
@Component({
  selector: 'page-password-recovery',
  templateUrl: 'password-recovery.html'
})
export class PasswordRecoveryPage {

  account: { new_password: string, new_password_repeat: string, authorization: string } = {
    new_password: '',
    new_password_repeat: '',
    authorization: document.URL.split("?")[1].split("=")[1]
  };


  constructor(public navCtrl: NavController,
              public user: User,
              public api: Api,
              public toastCtrl: ToastController,
              public translateService: TranslateService) {

    /*this.translateService.get('CHANGE_PASSWORD_ERROR').subscribe((value) => {
      this.changePasswordErrorString = value;
    })*/
  }

  changePassword() {

    const headers = new HttpHeaders().set("Authorization", this.account.authorization);

    let postData = {
      "password": this.account.new_password,
    };

    if (this.account.new_password === this.account.new_password_repeat) {
      this.api.put("users/recover_password", postData, {headers: headers, responseType: 'text/html'})
        .subscribe(data => {
          this.navCtrl.push('MenuPage');
        }, error => {
          document.querySelector(".error-message").innerHTML = error.error.message;
          document.querySelector(".error-message").removeAttribute("hidden");
        });
    } else {
      document.querySelector(".error-message").innerHTML = "Error al repetir contraseña";
      document.querySelector(".error-message").removeAttribute("hidden");
    }

  }

}
