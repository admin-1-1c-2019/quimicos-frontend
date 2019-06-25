import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ActivePrinciples } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-active-principle-detail',
  templateUrl: 'active-principle-detail.html'
})
export class ActivePrincipleDetailPage {
  activePrinciple: any;

  constructor(public navCtrl: NavController, navParams: NavParams, activePrinciples: ActivePrinciples) {
    this.activePrinciple = navParams.get('activePrinciple') || activePrinciples.defaultActivePrinciple;
  }

}
