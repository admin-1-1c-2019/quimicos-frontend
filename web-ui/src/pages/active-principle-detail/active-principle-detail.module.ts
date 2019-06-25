import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ActivePrincipleDetailPage } from './active-principle-detail';

@NgModule({
  declarations: [
    ActivePrincipleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivePrincipleDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ActivePrincipleDetailPage
  ]
})
export class ActivePrincipleDetailPageModule { }
