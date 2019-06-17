import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { UpgradeToAdminPage } from './upgrade-to-admin';

@NgModule({
  declarations: [
    UpgradeToAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(UpgradeToAdminPage),
    TranslateModule.forChild()
  ],
  exports: [
    UpgradeToAdminPage
  ]
})
export class UpgradeToAdminPageModule { }
