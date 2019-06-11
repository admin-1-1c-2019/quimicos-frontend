import {NgModule} from "@angular/core";
import {PasswordRecoveryPage} from "./password-recovery";
import {IonicPageModule} from "ionic-angular";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    PasswordRecoveryPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordRecoveryPage),
    TranslateModule.forChild()
  ],
  exports: [
    PasswordRecoveryPage
  ]
})
export class PasswordRecoveryPageModule { }
