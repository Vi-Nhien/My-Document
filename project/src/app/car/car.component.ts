import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CarService, Icar } from '../service/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars?:Icar[];

  constructor(
    private carService: CarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
      this.carService.getICar().subscribe(
        (next) =>{
          this.cars = next;
          console.log(this.cars)
        },
        (err) =>{

        },
        ()=> {}

      )
  }

  addCar(){
    this.router.navigate(['/car/add']);
  }

  editCar(car :Icar){
    if(car){
      this.router.navigate(['/car/edit',car.ID]);
    }
  }
}
