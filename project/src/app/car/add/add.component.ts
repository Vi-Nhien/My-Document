import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form?: FormGroup;
  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Horsepower: ['', Validators.required],
      Origin: ['', Validators.required]
    });
  }

  onSubmit(){
      console.log(this.form);
      this.carService.createCar(this.form?.value).subscribe(
        response =>{
          console.log(response);
          this.router.navigate(['/car']);
        }
      )
  }

}
