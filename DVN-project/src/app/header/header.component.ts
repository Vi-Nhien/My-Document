import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // myElementScript ?: HTMLScriptElement;
  // constructor() {
  //   this.myElementScript = document.createElement("script");
  //   this.myElementScript.src = "src/assets/javascript/header.js";
  //   document.body.appendChild(this.myElementScript);
  // }

  ngOnInit(): void {
  }

}
