import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() name : string;
  @Input() age: number;

  @Output() click_Remove = new EventEmitter<string>();

  removeClick(){
    this.click_Remove.emit(this.name);
  }



  constructor() { }

  ngOnInit(): void {
  }





}
