import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form?: FormGroup
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      phone:['', Validators.required],
      address:['',Validators.required],
      email:['',Validators.required]
    })
  }

  onSubmit(){
    console.log(this.form);
    this.userService.addIUser(this.form?.value).subscribe(
      Response =>{
        console.log(Response);
        this.router.navigate(['/user'])
      }
    )
  }

}
