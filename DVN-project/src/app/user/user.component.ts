import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUser, UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 12;
  tableSizes: any = [3, 6, 9, 12];
  users: IUser[] = [];
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userService.getIUser().subscribe(
      res => {
        this.users = res;
        console.log(this.users)
      },
      (err) =>{
        console.log(err)
      }
      )
      console.log('array user',this.users)
  }




  addUser() {
    this.router.navigate(['/user/add']);
  }

  editUser(user: IUser) {
    if (user) {
      this.router.navigate(['/user/edit', user.id])
    }
  }

  deleteUser(user: IUser) {
    if (user) {
      this.userService.deleteUser(user.id).subscribe(
        res => {
          console.log('complete');
          const index = this.users?.findIndex(m => m.id === user.id) || -1;
          if (index >= 0) {
            this.users?.splice(index, 1);
          }
        }
      )
    }
    this.router.navigate(['/user']);
  }


  onTableDataChange(event: any) {
    this.page = event;
    this.getUsers();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUsers();
  }

}
