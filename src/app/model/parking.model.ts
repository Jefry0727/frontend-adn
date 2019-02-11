import {VehicleModel} from './vehicle.model';

export class ParkingModel {

	public  idDTO: number;
	public  vehicleDTO: VehicleModel;
    public  hourCheckInDTO: string;
    public  hourCheckOutDTO: string;
    public  dateCheckInDTO: Date;
    public  dateCheckOutDTO: Date;
    public  stateDTO: number;
	
}