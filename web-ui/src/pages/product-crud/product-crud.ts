import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Product } from '../../models/product';
import { Products } from '../../providers';

import {Observable} from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

var mockProducts;
interface IServerResponse {
  items: string[];
  total: number;
}

@IonicPage()
@Component({
  selector: 'page-product-crud',
  templateUrl: 'product-crud.html'
})
export class ProductCrudPage {
  loading: boolean;
  currentProducts: Observable<any[]>;
  p: number = 1;
  total: number;

  constructor(public navCtrl: NavController, public products: Products, public modalCtrl: ModalController) {
    mockProducts = this.products.query();
    this.getPage(1);
  }

  getPage(page: number) {
    this.loading = true;
    this.currentProducts = serverCall(page).pipe(
        tap(res => {
            this.total = res.total;
            this.p = page;
            this.loading = false;
        }),
        map(res => res.items)
    );
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ProductCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.products.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of products.
   */
  deleteItem(item) {
    this.products.delete(item);
  }

  /**
   * Navigate to the detail page for this product.
   */
  openProduct(product: Product) {
    this.navCtrl.push('ProductDetailPage', {
      product: product
    });
  }
}

/**
 * Simulate an async HTTP call with a delayed observable.
 */
function serverCall(page: number): Observable<IServerResponse> {
  const perPage = 10;
  const start = (page - 1) * perPage;
  const end = start + perPage;

  return of({
          items: mockProducts.slice(start, end),
          total: mockProducts.length
      }).pipe(delay(1000));
}