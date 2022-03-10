import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface Interface_information{
  id: string;
  name: string;
  createdAt: Date;
  email: string;
}

@Injectable({providedIn: 'root'})
export class AppService {
  private apiUrl: string;
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiService + '/information';

  }

  getInterInfor(): Observable<Interface_information[]>{
    return this.httpClient.get<Interface_information[]>(this.apiUrl);
  }

}
