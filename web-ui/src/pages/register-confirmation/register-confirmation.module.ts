import {NgModule} from "@angular/core";
import {RegisterConfirmationPage} from "./register-confirmation";
import {IonicPageModule} from "ionic-angular";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    RegisterConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterConfirmationPage),
    TranslateModule.forChild()
  ],
  exports: [
    RegisterConfirmationPage
  ]
})
export class RegisterConfirmationPageModule { }
