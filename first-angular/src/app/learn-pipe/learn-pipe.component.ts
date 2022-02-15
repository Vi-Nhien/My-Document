import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthDay = new Date();
  person = {
    name: "hello",
    age: 30
  }
  constructor() { }

  ngOnInit(): void {
  }

}
