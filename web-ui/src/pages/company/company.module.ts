import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CompanyPage } from './company';

@NgModule({
  declarations: [
    CompanyPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyPage),
    TranslateModule.forChild()
  ],
  exports: [
    CompanyPage
  ]
})
export class CompanyPageModule { }
