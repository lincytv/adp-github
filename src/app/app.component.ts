import { Component } from '@angular/core';
import  { AuthenticationResult, AuthToken, PopTokenGenerator } from '@azure/msal-common';
import { MSAL_INSTANCE, MsalService } from '@azure/msal-angular';
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
  public commandx = "git config --global http.extraHeader \"MFA: bearer ${bearer}\“"
  public  email = new FormControl('', [Validators.required, Validators.email]);
  public comd = "";
  constructor(private msalService: MsalService) {

  }
  login(){
    this.msalService.loginPopup().subscribe((respoonse: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(respoonse.account)
      this.bearer = respoonse.accessToken
      //this.username = this.msalService.instance.
    })
    return this.bearer
  }
  getuser(){
    let username = this.msalService.instance.getActiveAccount()?.name;
    return username
  }
  getToken(){
    console.log(this.msalService.acquireTokenPopup.name);
    let bearer = this.msalService.instance.acquireTokenSilent
    return bearer
  }
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
}
export class CardOverviewExample {}
