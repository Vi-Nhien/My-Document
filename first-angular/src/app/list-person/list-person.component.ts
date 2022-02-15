import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    {name: "jenny" ,  age : 10},
    {name: "jame" ,  age : 12},
    {name: "alex" ,  age : 8},
    {name: "tom" ,  age : 14}

  ]

  constructor() { }

  ngOnInit(): void {
  }

  removePersonByName(name: string){
    const index = this.arrPeople.findIndex(e => e.name === name);
    this.arrPeople.splice(index, 1)
  }




}
