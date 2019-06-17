import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (navParams.get('admin')) {
      document.querySelector(".only-admin").removeAttribute("hidden");
    }
  }

  goToProductsPage() {
    this.navCtrl.push('TabsPage', this.navParams.get('admin'));
  }

  goToCompanyPage() {
    this.navCtrl.push('CompanyPage');
  }

  goToContactPage() {
    this.navCtrl.push('ContactPage');
  }

  goToHelpPage() {
    this.navCtrl.push('HelpPage');
  }

  logout() {
    this.navCtrl.push('WelcomePage');
  }

  turnUserToAdmin() {
    this.navCtrl.push('HelpPage'); //TODO: esto es solo para que no rompa por ahora
  }

}
