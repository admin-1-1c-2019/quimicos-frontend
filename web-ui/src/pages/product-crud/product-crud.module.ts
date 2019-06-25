import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ProductCrudPage } from './product-crud';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ProductCrudPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductCrudPage),
    TranslateModule.forChild(),
    NgxPaginationModule
  ],
  exports: [
    ProductCrudPage
  ]
})
export class ProductCrudPageModule { }
