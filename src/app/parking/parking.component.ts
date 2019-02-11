import { ParkingModel } from './../model/parking.model';
import { Component, OnInit } from '@angular/core';

import { ParkingService } from './parking.service';
@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
  providers: [ParkingService]
})
export class ParkingComponent implements OnInit {

  private listVehicle: Array<ParkingModel>;

  constructor(private parkingService: ParkingService) { }

  ngOnInit() {

    this.loadParking();

  }

  private loadParking(): void{

    this.parkingService.getListVehicle().subscribe(res =>{

      if(res.message == "200 OK"){

        this.listVehicle = res.list;

      }



    });

  }

}
