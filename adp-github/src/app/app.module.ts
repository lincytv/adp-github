import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClipboardModule } from 'ngx-clipboard';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

export function MSAL_InstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
   auth: {
     clientId: '', // lincy test
     authority: 'https://login.microsoftonline.com/', //lincy text
     redirectUri: 'http://localhost:4200',
     //postLogoutRedirectUri: 'http://localhost:4200'
   }
  })
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    ClipboardModule,
    MatToolbarModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSAL_InstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
