import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form?: FormGroup;
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    this.form = this.fb.group({
      id:[''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.route.params.pipe(
      switchMap((param) => {
        const id = param['id'];
        return this.userService.getUserById(id);
      })
    ).subscribe(
      (res) => {
        console.log(res);
        this.form?.patchValue(res);
        console.log(this.form);
      }
    )
  }
  onSubmit() {
    console.log(this.form);
    this.userService.updateUser(this.form?.value).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/user']);
      }
    )
  }

}
