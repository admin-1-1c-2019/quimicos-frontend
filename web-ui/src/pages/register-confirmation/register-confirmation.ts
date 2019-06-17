import {IonicPage, NavController, ToastController} from "ionic-angular";
import {Component} from "@angular/core";
import {Api, User} from "../../providers";
import {TranslateService} from "@ngx-translate/core";
import {HttpHeaders} from "@angular/common/http";

@IonicPage({
  segment: 'register-confirmation/:authorization'
})
@Component({
  selector: 'page-register-confirmation',
  templateUrl: 'register-confirmation.html'
})
export class RegisterConfirmationPage {

  account: { authorization: string } = {
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

  goToHome() {

    const headers = new HttpHeaders().set("Authorization", this.account.authorization);

    let postData = {
      "Authorization": this.account.authorization,
    };

    this.api.put("users", postData, {headers: headers, responseType: 'text/html'})
      .subscribe(data => {
        this.navCtrl.push('ContentPage');
      }, error => {
        console.log(error);
      });

  }

}
