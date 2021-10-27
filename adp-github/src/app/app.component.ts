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
  public clinetid = "";
  public directoryId = "";
  getusername(){

  }


}
