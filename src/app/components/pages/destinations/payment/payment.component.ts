import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  priceDetails: any ;
  selectAccount: any;
  cardNumber: any;
  visible: boolean = false;

  bookingId:any;
  tourBookingDetails:any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.bookingIdSubject$.subscribe((res: any) => {
      console.log(res);
      this.bookingId=res._id;

      this.api.getBookingById(this.bookingId).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.tourBookingDetails=res;
          this.priceDetails=res.priceDetails;
        },error:(err:any)=>{
          console.log(err);
        }
      });
    });
  }

}
