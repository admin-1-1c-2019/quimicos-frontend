import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Products } from '../../providers';

import {Observable} from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

// TODO Grab products from backend instead of mock
// TODO Implement filtering by all product fields, not just name

var items;

interface IServerResponse {
  items: string[];
  total: number;
}

@IonicPage()
@Component({
  selector: 'page-catalog',
  templateUrl: 'catalog.html'
})
export class CatalogPage {

  currentItems: Observable<any[]>;
  loading: boolean;
  p: number = 1;
  total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public products: Products) { }

  ionViewDidLoad() {
    items = this.products.query();
    this.getPage(1);
  }

  onNameFilterChange(filter: string){
    items = this.products.query({name: filter});
    this.getPage(1);
  }
 
  getPage(page: number) {
    this.loading = true;
    this.currentItems = serverCall(page).pipe(
        tap(res => {
            this.total = res.total;
            this.p = page;
            this.loading = false;
        }),
        map(res => res.items)
    );
}

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
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
          items: items.slice(start, end),
          total: items.length
      }).pipe(delay(1000));
}
