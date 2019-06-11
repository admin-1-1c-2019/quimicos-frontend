import {IonicPage, NavController, ToastController} from "ionic-angular";
import {Component} from "@angular/core";
import {Api, User} from "../../providers";
import {TranslateService} from "@ngx-translate/core";
import {HttpHeaders} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-register-confirmation',
  templateUrl: 'register-confirmation.html'
})
export class RegisterConfirmationPage {

  account: { authentication: string } = {
    authentication: document.URL.split("?")[1].split("=")[1]
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

    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append("authentication", this.account.authentication);

    let postData = {
      "authentication": this.account.authentication,
    };

    this.api.put("users", postData, {headers: headers})
      .subscribe(data => {
        this.navCtrl.push('MenuPage');
      }, error => {
        console.log(error);
      });

  }

}
