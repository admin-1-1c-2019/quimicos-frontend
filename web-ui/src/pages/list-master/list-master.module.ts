import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListMasterPage } from './list-master';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ListMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterPage),
    TranslateModule.forChild(),
    NgxPaginationModule
  ],
  exports: [
    ListMasterPage
  ]
})
export class ListMasterPageModule { }
