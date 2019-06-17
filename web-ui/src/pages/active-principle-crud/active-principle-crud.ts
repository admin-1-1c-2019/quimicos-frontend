import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { ActivePrinciple } from '../../models/active-principle';
import { ActivePrinciples } from '../../providers';

import {Observable} from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

var mockActivePrinciples;
interface IServerResponse {
  items: string[];
  total: number;
}

@IonicPage()
@Component({
  selector: 'page-active-principle-crud',
  templateUrl: 'active-principle-crud.html'
})
export class ActivePrincipleCrudPage {
  loading: boolean;
  currentActivePrinciples: Observable<any[]>;
  p: number = 1;
  total: number;

  constructor(public navCtrl: NavController, public activePrinciples: ActivePrinciples, public modalCtrl: ModalController) {
    mockActivePrinciples = this.activePrinciples.query();
    this.getPage(1);
  }

  getPage(page: number) {
    this.loading = true;
    this.currentActivePrinciples = serverCall(page).pipe(
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
   * Prompt the user to add a new active principle. This shows our ActivePrincipleCreatePage in a
   * modal and then adds the new active principle to our data source if the user created one.
   */
  addActivePrinciple() {
    let addModal = this.modalCtrl.create('ActivePrincipleCreatePage');
    addModal.onDidDismiss(activePrinciple => {
      if (activePrinciple) {
        this.activePrinciples.add(activePrinciple);
      }
    })
    addModal.present();
  }

  /**
   * Delete an active principle from the list of active principles.
   */
  deleteItem(activePrinciple) {
    this.activePrinciples.delete(activePrinciple);
  }

  /**
   * Navigate to the detail page for this active principle.
   */
  openActivePrinciple(activePrinciple: ActivePrinciple) {
    this.navCtrl.push('ActivePrincipleDetailPage', {
      activePrinciple: activePrinciple
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
          items: mockActivePrinciples.slice(start, end),
          total: mockActivePrinciples.length
      }).pipe(delay(1000));
}