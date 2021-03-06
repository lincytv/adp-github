import { Component, OnInit } from '@angular/core';
import  { AuthenticationResult, AuthToken, PopTokenGenerator } from '@azure/msal-common';
import { MSAL_INSTANCE, MsalService } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import {FormControl, Validators} from '@angular/forms';
import { stringify } from 'querystring';
//import { HttpClient } from 'microsoft-authentication-library-for-js/lib/msal-node/src/network/HttpClient';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Allianz';
  public userLogedIn : string | undefined = "";
  public adtoken = environment.clientId;
  public bearer : string | undefined  = "";
  public comdToken = ""
  public  email = new FormControl('', [Validators.required, Validators.email]);
  public comd = "";
  apiResponse: string | undefined;
  constructor(private msalService: MsalService, private httpClient: HttpClient) {

  }
  ngOnInit(){
      this.loginredir();
     this.msalService.instance.handleRedirectPromise().then(res => {
      if (res != null && res.account != null ) {
      this.msalService.instance.setActiveAccount(res.account)
      this.bearer = res.accessToken
      this.comdToken = "git config --global http.extraHeader \"MFA: bearer "+(this.bearer)+"\""
      let userLogedIn = res.account?.username
      this.userLogedIn = userLogedIn
      console.log(userLogedIn)
      }
     })
  }
  loginredir(){
   this.msalService.loginRedirect();

  }

  isLoggedIn(): boolean {
    return this.msalService.instance.getActiveAccount() != null
  }

  callProfile() {
    this.httpClient.get("https://graph.microsoft-ppe.com/v1.0/me").subscribe(res => {
      this.apiResponse = JSON.stringify(res)
      console.log(this.apiResponse)
    })
  }

}
export class CardOverviewExample {}
