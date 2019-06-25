import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ProductUpdatePage } from './product-update';

@NgModule({
  declarations: [
    ProductUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductUpdatePage),
    TranslateModule.forChild()
  ],
  exports: [
    ProductUpdatePage
  ]
})
export class ProductUpdatePageModule { }
