import { ParkingModel } from './parking.model';

export class PaymentModel {

    public idDTO: number;
    public parkingDTO: ParkingModel;
    public priceDTO: number;
    public timeInsideDTO: string;

}