import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {


  selectedDate: Date | null = null;

  isRotated = false;

  spots: any[] = [
    {
      img: '../../../../../assets/checkout/spot/img2.png',
      title: 'Dolphin Watch',
      desc: 'For a unique dolphin watching experience in Boracay, join a sunrise tour featuring a local guide’s exclusive “dolphin dance” technique to attract dolphins closer. This tour also includes a visit to a secret viewing spot known only to locals, offering intimate and spectacular dolphin encounters not available elsewhere.',
      date: '',
    },
    {
      img: '../../../../../assets/checkout/spot/img1.png',
      title: 'Sports Package',
      desc: 'For a unique sports package in Boracay, enjoy personalized lessons in exclusive water sports like kiteboarding and stand-up paddleboarding at hidden spots. This package includes premium equipment and private training sessions, plus access to local sports events for an insider’s view of the island’s vibrant sports scene.',
      date: '',
    },
  ];
  minDate:Date;
  constructor(){
    this.minDate = new Date();
  }
  toggleRotation() {
    this.isRotated = !this.isRotated;
    
  }
  // Method to open the PrimeNG calendar when clicking on the custom icon
  openCalendar(calendar: any) {
    calendar.toggle();
  }
  selectTime(timePicker:any){
    timePicker.toggle();
  }


}
