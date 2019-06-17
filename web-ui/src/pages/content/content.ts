import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {
  admin: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.admin = navParams.get('admin');
  }

  goToProductsPage() {
    this.navCtrl.push('TabsPage', {
      admin: this.navParams.get('admin')
    });
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
    this.navCtrl.push('UpgradeToAdminPage');
  }

}
