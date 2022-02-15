import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import 'rxjs/operators/toPromise'

@Component({
  selector: 'app-ip',
  template: `<h3>hello world</h3>`

})
export class  IpComponent{
  constructor(private http:HttpClient){
    this.http.get('http://ip.jsontest.com/')
    .toPromise()
    .then(res => res.json())
    .then(reJson => console.log(resJson))

  }

}
