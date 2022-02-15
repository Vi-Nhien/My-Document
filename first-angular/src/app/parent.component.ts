import { Component} from "@angular/core"

@Component
({
  selector: "app-parent",
  template:`
  <h3>Parent component {{ value }}</h3>
  <app-child (myclick) = "changeValue( $event)"></app-child>
  `
})

export class ParentComponent{

    value = 0;
    changeValue(isAdd: boolean){
      if(isAdd){
        this.value ++;
      }

      else{
        this.value --;
      }
    }
}
