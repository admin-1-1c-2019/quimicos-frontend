import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

import { ActivePrinciples } from '../../providers';
import { ActivePrinciple } from '../../models/active-principle';

@IonicPage()
@Component({
  selector: 'page-product-create',
  templateUrl: 'product-create.html'
})
export class ProductCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  product: any;

  form: FormGroup;

  activePrinciples: ActivePrinciple[];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder,
              public activePrinciplesProvider: ActivePrinciples) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image1: ['', Validators.required],
      image2: [''],
      image3: [''],
      size: [null, Validators.required],
      activePrincipleId: [0, Validators.required]
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
   * The user is done and wants to create the product, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

  onActivePrincipleChange(){
  }
}
