import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';


export interface IUser {
  id?: string,
  firstName: string,
  lastName: string,
  phone: string,
  address: string,
  email: string
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiURL: string;

  constructor(private httpClient: HttpClient) {
    this.apiURL = environment.apiServer + '/user';
  }



  getIUser() : Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.apiURL)
  }

  getUserById(id: String){
    return this.httpClient.get<IUser>(`${this.apiURL}/${id}`)
  }

  addIUser(user: IUser) : Observable<IUser>{
    return this.httpClient.post<IUser>(this.apiURL, user);
  }

  deleteUser(id?: string){
    return this.httpClient.delete(`${this.apiURL}/${id}`);
  }

  updateUser(user: IUser){
    return this.httpClient.put(`${this.apiURL}/${user.id}`, user);
  }
}

