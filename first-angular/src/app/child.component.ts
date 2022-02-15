import { Component, Output, EventEmitter} from "@angular/core"

@Component
({
  selector: "app-child",
  template:`<h3>Child component</h3>
  <button (click) = "addValueParent()">Add</button>
  <button (click) = "subValueParent()">Sub</button>`
})

export class ChildComponent{
  @Output() myclick = new EventEmitter<boolean>();

  addValueParent(){
    this.myclick.emit(true);
  }

  subValueParent(){
    this.myclick.emit(false);
  }
}
