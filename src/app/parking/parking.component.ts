
import { ParkingModel } from './../model/parking.model';
import { Component, OnInit } from '@angular/core';

import { ParkingService } from './parking.service';
import { VehicleModel } from '../model/vehicle.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
  providers: [ParkingService]
})
export class ParkingComponent implements OnInit {

  private listVehicle: Array<ParkingModel>;

  private vehicle: VehicleModel;

  constructor(private parkingService: ParkingService) {

    this.vehicle = new VehicleModel();
   }

  ngOnInit() {

    this.loadParking();

  }

  /**
   * Jefry Londoño
   * Carga el listado de vehiculos estacionados
   */
  private loadParking(): void{

    this.parkingService.getListVehicle().subscribe(res =>{

      if(res.message == "200 OK"){

        this.listVehicle = res.list;

      }

    });

  }

  private saveParking():void{

    this.parkingService.saveParking(this.vehicle).subscribe(res => {

      this.loadParking();


    }, error =>{

      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: ''+error.error.description,

      })
     

    });
    
  }

}
