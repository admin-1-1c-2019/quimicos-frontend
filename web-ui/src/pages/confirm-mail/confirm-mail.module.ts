import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ConfirmMailPage } from './confirm-mail';

@NgModule({
  declarations: [
    ConfirmMailPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmMailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ConfirmMailPage
  ]
})
export class ConfirmMailPageModule { }
