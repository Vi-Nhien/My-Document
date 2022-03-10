import { Component, OnInit } from '@angular/core';
import { AppService, Interface_information } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pagination-code';


  infors?: Interface_information[];

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.getInfor()
  }

  getInfor() {
    this.appService.getInterInfor().subscribe(
      res => {
        this.infors = res
        console.log(this.infors)
      },
      (err) => {
        console.log(err);
      }
    )
    console.log("list", this.infors)
  }


}
