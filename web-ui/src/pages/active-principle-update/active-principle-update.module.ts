import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ActivePrincipleUpdatePage } from './active-principle-update';

@NgModule({
  declarations: [
    ActivePrincipleUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(ActivePrincipleUpdatePage),
    TranslateModule.forChild()
  ],
  exports: [
    ActivePrincipleUpdatePage
  ]
})
export class ActivePrincipleUpdatePageModule { }
