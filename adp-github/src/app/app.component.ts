import { Component } from '@angular/core';
import  { AuthToken } from '@azure/msal-common';
//import { MSAL_INSTANCE, MsalService } from 'msal';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import {FormControl, Validators} from '@angular/forms';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Allianz';
  public username = "";
  public bearer = "";
  public clinetid = "";
  public directoryId = "";
  public commandx = "git config --global http.extraHeader \"MFA: bearer ${{bearer}}\“"
  public  email = new FormControl('', [Validators.required, Validators.email]);
  public comd = "";
  getusername(){
    return
  }
  getcode(){

  }
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
}
export class CardOverviewExample {}