import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, AlertController } from 'ionic-angular';

import { ActivePrinciple } from '../../models/active-principle';
import { ActivePrinciples } from '../../providers';

import {Observable} from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Products } from '../../providers';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(public navCtrl: NavController, public activePrinciples: ActivePrinciples, public products: Products,
              public modalCtrl: ModalController, public alertCtrl: AlertController, public translate: TranslateService) {
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
   * If at least one product references it, do not allow deletion.
   */
  deleteActivePrinciple(activePrinciple) {
    if( this.products.query({activePrincipleId: activePrinciple.id}).length > 0 ){
      let errorMsg = this.alertCtrl.create({
        title: this.translate.instant('ERROR'),
        message: this.translate.instant('CANNOT_DELETE_AP_MSG'),
        buttons: ['OK']
      });
      errorMsg.present();
      return;
    }
    this.activePrinciples.delete(activePrinciple);
    this.getPage(1);
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