import { Component } from '@angular/core';
import  { AuthToken } from '@azure/msal-common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Allianz';
  public username = "";
  public bearer = "";
  public clinetid = "9d2cd5cd-bb7f-43f8-8e5b-affb0958a2ad";
  public directoryId = "6e06e42d-6925-47c6-b9e7-9581c7ca302a";
  getusername(){

  }


}
