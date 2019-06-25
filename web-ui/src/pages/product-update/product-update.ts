import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';

import { ActivePrinciples } from '../../providers';
import { ActivePrinciple } from '../../models/active-principle';

@IonicPage()
@Component({
  selector: 'page-product-update',
  templateUrl: 'product-update.html'
})
export class ProductUpdatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  activePrinciples: ActivePrinciple[];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder,
              public activePrinciplesProvider: ActivePrinciples, params: NavParams) {
    this.form = formBuilder.group({
      id: [params.get('id')],
      images: [[]],
      image1: [params.get('images')[0]],
      image2: [params.get('images').length > 1? params.get('images')[1] : null],
      image3: [params.get('images').length > 2? params.get('images')[2] : null],
      name: [params.get('name'), Validators.required],
      description: [params.get('description')],
      size: [params.get('size')],
      activePrincipleId: [params.get('activePrincipleId')],
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
    this.activePrinciples = activePrinciplesProvider.query();
  }

  ionViewDidLoad() {

  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to update the active principle, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }
}
