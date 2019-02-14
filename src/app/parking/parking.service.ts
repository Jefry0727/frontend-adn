import { VehicleModel } from './../model/vehicle.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*',});

  private baseURL = 'http://localhost:8080/';

  private baseURLTRM = 'http://app.docm.co/prod/Dmservices/Utilities.svc/GetTRM';

  constructor(private http: HttpClient) {


  }


  public getListVehicle(): Observable<any> {

    return this.http.get(this.baseURL + 'listParking');

  }

  public saveParking(vehicleDTO: VehicleModel): Observable<any> {
    return this.http.post(this.baseURL + 'saveParking', vehicleDTO, { headers: this.httpHeaders });
  }

  public savePayment(vehicleDTO: VehicleModel):Observable<any>{

    return this.http.post(this.baseURL + 'savePayment', vehicleDTO, {headers : this.httpHeaders});

  }

  public getTRM(): Observable<any> {
    console.log('this.http.get(this.baseURLTRM)');
    console.log(this.http.get(this.baseURLTRM,{headers : this.httpHeaders}));
    // console.log('this.http.post(this.baseURLTRM)');
    // console.log(this.http.post(this.baseURLTRM,'', {headers : this.httpHeaders}));
    
        
    return this.http.get(this.baseURLTRM);

  }

}



