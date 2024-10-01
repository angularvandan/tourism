import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  priceDetails: any =
    {
      priceDetail:
        [
          {
            name: 'Adult',
            age: '18+',
            price: 210,
            count: 2,
            subTotalPrice: ''
          },
          {
            name: 'Children',
            age: '8+',
            price: 210,
            count: 1,
            subTotalPrice: ''
          },
          {
            name: 'Infant',
            age: '0-3 yrs',
            price: 90,
            count: 2,
            subTotalPrice: ''
          }
        ],
      totalPrice: '$830',
  }
  selectAccount: any;
  cardNumber:any;
  visible: boolean=false;


}
