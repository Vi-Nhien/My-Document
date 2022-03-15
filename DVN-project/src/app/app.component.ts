import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DVN-project';
  // myElementScript ?: HTMLScriptElement;
  constructor() {
    // this.myElementScript = document.createElement("script");
    // this.myElementScript.src = "src/assets/javascript/header.js";
    // document.body.appendChild(this.myElementScript);
  }
}
