


import { Component, OnInit } from '@angular/core';

import { ParkingService } from './parking.service';
import { VehicleModel } from '../model/vehicle.model';
import { ParkingModel } from '../model/parking.model';
import { PaymentModel } from '../model/payment.model';
import Swal from 'sweetalert2';
// import { $ } from 'protractor';
import * as $ from 'jquery/dist/jquery.min.js';




@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
  providers: [ParkingService]
})
export class ParkingComponent implements OnInit {

  private listVehicle: Array<ParkingModel>;

  private trm : string;

  private payment: PaymentModel;

  private vehicle: VehicleModel;

  private vehiclePayment: VehicleModel;

  constructor(private parkingService: ParkingService) {

    this.vehicle = new VehicleModel();
    this.vehiclePayment = new VehicleModel();
    this.payment = new PaymentModel();

    this.payment.parkingDTO = new ParkingModel();
  }

  ngOnInit() {

    this.loadParking();

    this.getTMR();

  }

  /**
   * Jefry Londoño
   * Carga el listado de vehiculos estacionados
   */
  private loadParking(): void {

    this.parkingService.getListVehicle().subscribe(res => {

      if (res.message == "200 OK") {

        this.listVehicle = res.list;

      }

    }, error => {

      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: '' + error.error.description,

      });

    });

  }

  private saveParking(): void {

    this.parkingService.saveParking(this.vehicle).subscribe(res => {

      this.loadParking();

      Swal.fire({
        type: 'success',
        title: 'Transacción Exitosa!',
        animation: false,
        customClass: 'animated tada',
        text: 'El Vehículo de placas ' + this.vehicle.licenseDTO.toUpperCase() + ' ha sido guardado exitosamente!'
      });

      this.vehicle = new VehicleModel();

    }, error => {

      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: '' + error.error.description,

      });


    });

  }

  public savePayment(): void {

    this.parkingService.savePayment(this.vehiclePayment).subscribe(res => {

      this.payment = res.paymentDTO;

      Swal.fire({
        type: 'success',
        title: 'Transacción Exitosa!',
        animation: false,
        customClass: 'animated tada',
        text: 'Total a pagar: $ ' + this.payment.priceDTO + ' por ' + this.payment.timeInsideDTO + ' hora(s), al vehículo de placas: '
          + this.payment.parkingDTO.vehicleDTO.licenseDTO
      });

      this.loadParking();

      setTimeout(() => {

        this.payment = new PaymentModel();

        this.payment.parkingDTO = new ParkingModel();

        this.vehiclePayment = new VehicleModel();

        $('#date-hour-checkIn').val('');

        $('#date-hour-checkOut').val('');

        $('#totalPrice').val('');

      }, 4000);

    }, error => {

      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: '' + error.error.description,

      });


    });

  }

  public getTMR(): void {

    this.parkingService.getTRM().subscribe(res => {

      console.log(res);

      this.trm = res;


    }, error => {
      console.log('erorrr');
      
      console.log(error);
      

    }
    );

  }

}
