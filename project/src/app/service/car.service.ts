import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface Icar {
  id?: string;
  Horsepower: number;
  Year ?: Date;
  Origin: string;
}

@Injectable({ providedIn: 'root' })
export class CarService {
  private apiUrl: string;
  constructor(
    private http: HttpClient
    )
    {
    this.apiUrl = environment.apiServer + '/car';
  }


  getICar(): Observable<Icar[]> {
    return this.http.get<Icar[]>(this.apiUrl);
  }

  getByID(id:string): Observable<Icar>{
    return this.http.get<Icar>(`${this.apiUrl}/${id}`)
  }

  createCar( car:Icar):Observable<Icar>{
    return this.http.post<Icar>(this.apiUrl, car);
  }

  updateCar(car :Icar){
    return this.http.put(`${this.apiUrl}/${car.id}`,car);
  }

  deleteCar(id?: string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
