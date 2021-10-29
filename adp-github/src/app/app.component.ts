import { Component } from '@angular/core';
import  { AuthenticationResult, AuthToken, PopTokenGenerator } from '@azure/msal-common';
import { MSAL_INSTANCE, MsalService } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import {FormControl, Validators} from '@angular/forms';
import { stringify } from 'querystring';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Allianz';
  public userLogedIn : string | undefined = "";
  public adtoken = ""
  public bearer = "";
  public clinetid = "";
  public commandx = "git config --global http.extraHeader \"MFA: bearer ${bearer}\“"
  public comdToken = "git config --global http.extraHeader \"MFA: bearer ${{bearer}}\“"
  public  email = new FormControl('', [Validators.required, Validators.email]);
  public comd = "";
  constructor(private msalService: MsalService) {

  }
  login(){
    this.msalService.loginPopup().subscribe((respoonse: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(respoonse.account)
      this.bearer = respoonse.accessToken
      this.comdToken = "git config --global http.extraHeader \"MFA: bearer "+(respoonse.accessToken)+"\""
      let userLogedIn = respoonse.account?.username
      this.userLogedIn = userLogedIn
      console.log(userLogedIn)
    })
    return this.bearer, this.userLogedIn
  }
  getuser(){

    return
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
