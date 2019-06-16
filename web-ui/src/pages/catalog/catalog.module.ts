import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CatalogPage } from './catalog';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    CatalogPage,
  ],
  imports: [
    IonicPageModule.forChild(CatalogPage),
    TranslateModule.forChild(),
    NgxPaginationModule
  ],
  exports: [
    CatalogPage
  ]
})
export class CatalogPageModule { }
