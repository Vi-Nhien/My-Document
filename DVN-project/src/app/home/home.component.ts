import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date ?: Date;
  constructor() { }

  ngOnInit(): void {
    timer(0, 1000).subscribe(() =>
      this.date = new Date())
  }


}
