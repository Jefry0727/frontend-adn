import { Component, OnInit } from '@angular/core';

import { ParkingService } from './parking.service';
@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
  providers: [ParkingService]
})
export class ParkingComponent implements OnInit {

  constructor(private parkingService: ParkingService) { }

  ngOnInit() {
  }

}
