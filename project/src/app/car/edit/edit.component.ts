import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CarService } from 'src/app/service/car.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form?: FormGroup;
  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      Horsepower: ['', Validators.required],
      Origin: ['', Validators.required]
    });

    this.route.params.pipe(
      switchMap((param) => {
        const id = param['id'];
        return this.carService.getByID(id);
      })
    ).subscribe(
      (res) =>{
        console.log(res);
        this.form?.patchValue(res);
      }
    )

  }

  onSubmit() {
    console.log(this.form);
    this.carService.updateCar(this.form?.value).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/user']);
      }
    )
  }

}
