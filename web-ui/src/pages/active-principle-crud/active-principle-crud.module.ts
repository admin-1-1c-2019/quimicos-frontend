import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ActivePrincipleCrudPage } from './active-principle-crud';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ActivePrincipleCrudPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivePrincipleCrudPage),
    TranslateModule.forChild(),
    NgxPaginationModule
  ],
  exports: [
    ActivePrincipleCrudPage
  ]
})
export class ActivePrincipleCrudPageModule { }
