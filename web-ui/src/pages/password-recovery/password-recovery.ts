import {IonicPage, NavController, ToastController} from "ionic-angular";
import {Component} from "@angular/core";
import {Api, User} from "../../providers";
import {TranslateService} from "@ngx-translate/core";

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

  // Our translated text strings
  private changePasswordErrorString: string;

  constructor(public navCtrl: NavController,
              public user: User,
              public toastCtrl: ToastController,
              public translateService: TranslateService) {

    this.translateService.get('CHANGE_PASSWORD_ERROR').subscribe((value) => {
      this.changePasswordErrorString = value;
    })
  }

  changePassword() {

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');

    let postData = {
      "password": this.account.new_password,
    };

    Api.prototype.put("/users/recover_password", postData, headers)
      .subscribe(data => {
        console.log(data['_body']);
        //TODO: push home page
      }, error => {
        console.log(error);
      });

  }

}
