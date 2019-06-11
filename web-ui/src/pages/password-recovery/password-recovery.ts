import {IonicPage, NavController, ToastController} from "ionic-angular";
import {Component} from "@angular/core";
import {Api, User} from "../../providers";
import {TranslateService} from "@ngx-translate/core";
import {HttpHeaders} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-password-recovery',
  templateUrl: 'password-recovery.html'
})
export class PasswordRecoveryPage {

  account: { new_password: string, new_password_repeat } = {
    new_password: '',
    new_password_repeat: ''
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

    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');

    let postData = {
      "password": this.account.new_password,
    };

    this.api.put("users/recover_password", postData, {headers: headers})
      .subscribe(data => {
        this.navCtrl.push('MenuPage');
      }, error => {
        console.log(error);
      });

  }

}
