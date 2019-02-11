import { VehicleModel } from './../model/vehicle.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  private httpHeaders = new  HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }


  public getListVehicle():Observable<any>{
    
    return this.http.get('http://localhost:8080/listParking');
  
  }

  public saveParking(vehicleDTO:VehicleModel):Observable<any>{
    return this.http.post("http://localhost:8080/saveParking",vehicleDTO,{headers:this.httpHeaders});
 }

//  public saveParkingv2(vehicleDTO:VehicleModel):Observable<any>{
//   return this.http.post("http://localhost:8080/saveParking",vehicleDTO,{headers:this.httpHeaders}).catch(this.handleError);
// }

// handleError(error:HttpErrorResponse){

// return Observable.throw(error.message);
// }

}



