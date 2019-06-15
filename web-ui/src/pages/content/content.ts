import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  constructor(public navCtrl: NavController) { }

  goToProductsPage() {
    this.navCtrl.push('TabsPage');
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

}
