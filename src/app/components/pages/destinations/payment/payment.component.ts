import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  priceDetails: any;
  selectAccount: any;
  cardNumber: any;
  visible: boolean = false;

  bookingId: any;
  tourBookingDetails: any;

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.bookingIdSubject$.subscribe((res: any) => {
      console.log(res);
      this.bookingId = res._id;

      this.api.getBookingById(this.bookingId).subscribe({
        next: (res: any) => {
          console.log(res);
          this.tourBookingDetails = res;
          this.priceDetails = res.priceDetails;
        }, error: (err: any) => {
          console.log(err);
        }
      });
    });
    console.log(window.paypal);
    window.paypal.Buttons({
      style: {
        layout: 'horizontal',
        color: 'blue', // options: 'gold', 'blue', 'silver', 'white', 'black'
        shape: 'pill', // options: 'rect', 'pill'
        label: 'paypal', // options: 'paypal', 'checkout', 'buynow', 'pay', 'installment'
        height: 45
      },
      createOrder: (data: any, action: any) => {
        // Use the price from booking details dynamically
        const amount = this.tourBookingDetails?.totalPrice; // Adjust this based on your actual structure
        return this.api.createPaypalOrder(amount).subscribe((orderID: any) => {
          console.log(orderID);
          return orderID; // Return order ID for approval
        }, (error: any) => {
          console.log('Error creating PayPal order', error);
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert('Payment successful!');
        }).catch((error: any) => {
          console.error("Error capturing payment", error);
        });
      },
      // fundingSource: window.paypal.FUNDING.CARD // Enable card payments
    }).render(this.paymentRef.nativeElement);

  }

}
