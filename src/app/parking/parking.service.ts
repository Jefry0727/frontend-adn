import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParkingModel } from '../model/parking.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private http: HttpClient) { }


  public getListVehicle():Observable<any>{
    
    return this.http.get('http://localhost:8080/listParking');
  
  }

}



