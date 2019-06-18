import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ActivePrincipleCreatePage } from './active-principle-create';

@NgModule({
  declarations: [
    ActivePrincipleCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ActivePrincipleCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    ActivePrincipleCreatePage
  ]
})
export class ActivePrincipleCreatePageModule { }
