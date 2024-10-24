import { style } from '@angular/animations';
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
  orderID: any
  bookingId: any;
  tourBookingDetails: any;

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
  constructor(private api: ApiService) { }

  async createOrder() {
    try {
      const amount = this.tourBookingDetails?.totalPrice;
      this.api.createPaypalOrder(amount).subscribe((response: any) => {
        console.log("response: ", response)
        this.orderID = response.orderID;
        console.log('Order ID:', this.orderID);
        this.initiatePayPalPayment();
      });
    } catch (error) {
      console.error('Error creating order:', error);
    }
  }

  initiatePayPalPayment() {
    paypal.Buttons({
      createOrder: () => {
        // Use the order ID created by the backend
        return this.orderID;
      },
      onApprove: async (data: any, actions: any) => {
        // Capture the payment on approval
        const captureResponse = await actions.order.capture();
        console.log('Payment completed successfully:', captureResponse);

        const payerID = captureResponse.payer.payer_id;
        const amount = this.tourBookingDetails?.totalPrice;
        const paymentStatus = captureResponse.status;

        // Call the API to store payment details
        this.api.storePaymentDetails({
          orderID: this.orderID,
          bookingId: this.bookingId,
          amount,
          paymentStatus,
          payerID,
        }).subscribe((res: any) => {
          this.visible = true; // Show success message or confirmation
        }, (err: any) => {
          console.error('Error storing payment details:', err);
        });

      },
      onError: (err: any) => {
        console.error('Payment error:', err);
        alert('Payment failed!');
      }
    }).render('#paypal-button-container');
  }

  onPayButtonClick() {
    // Send card details to backend
    // if (this.cardNumber && this.expiryMonth && this.expiryYear && this.cvv) {
    this.createOrder();
    // } else {
    //   alert('Please fill all card details.');
    // }
  }


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
  }

}
