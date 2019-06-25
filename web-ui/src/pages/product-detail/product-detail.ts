import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Products } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetailPage {
  product: any;

  constructor(public navCtrl: NavController, navParams: NavParams, products: Products) {
    this.product = navParams.get('product') || products.defaultProduct;
  }

}
