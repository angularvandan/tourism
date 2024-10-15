import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {


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
  minDate: Date;

  userForm!: FormGroup;

  //this is for shwing checkout specific section
  checkoutStatus: any = {
    userDetailsStatus: false,
    paymentStatus: false
  }
  visible: boolean = false;
  timeStatus: boolean = false;

  allToursDetails: any[] = [];
  bookingId:any;

   // Object to store count and price for each category
   priceDetails = {
    adult: { count: 1, price: 0, totalPrice: 0 },  // Adult has 2 by default
    child: { count: 1, price: 0, totalPrice: 0 },  // Child has 2 by default
    infant: { count: 1, price: 0, totalPrice: 0 }    // Infant has 1 by default
  };

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {
    this.minDate = new Date();
  }


  ngOnInit(): void {
    this.userForm = this.fb.group({
      user_name: ['', Validators.required],
      user_mobile: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      user_email: ['', [Validators.required, Validators.email]],
      user_address: ['', Validators.required],
    });
    // Subscribe to the data observable
    this.api.toursData$.subscribe((data: any) => {
      this.allToursDetails = [...data];

      this.allToursDetails[0].date = null;
      for (let i = 1; i < this.allToursDetails.length; i++) {
        this.allToursDetails[i].time = null; // Add time to the remaining objects
      }
      console.log(this.allToursDetails);

      //call for starting price
      this.calculateTotalPrices();
    });
    //for booking
    this.api.bookingIdSubject$.subscribe((id:any)=>{
      this.bookingId=id;
      console.log(this.bookingId);
    })
  }


  // Method to allow only letters (alphabets) in input fields using RegEx
  allowLettersOnly(event: KeyboardEvent): boolean {
    const inputChar = String.fromCharCode(event.charCode); // Get the character from the charCode
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(inputChar)) {
      return true;
    } else {
      event.preventDefault(); // Prevent the input if it doesn't match the pattern
      return false;
    }
  }

  addTime(event: Date) {
    console.log(event);
    this.timeStatus = true;
    for (let i = 1; i < this.allToursDetails.length; i++) {
      if (!this.allToursDetails[i].time) {
        this.timeStatus = false;
        console.log(this.timeStatus);
      }

    }
  }

  calculateTotalPrices() {
    this.allToursDetails.forEach(tour => {
      // Sum prices from the main object
      if (tour.price_adult) {
        this.priceDetails.adult.price += parseInt(tour.price_adult);
      }
      if (tour.price_child) {
        this.priceDetails.child.price += parseInt(tour.price_child);
      }
      if (tour.price_infant) {
        this.priceDetails.infant.price += parseInt(tour.price_infant);
      }

      // If the tour has spot_id with prices, include those as well
      if (tour.spot_id) {
        if (tour.spot_id.price_adult) {
          this.priceDetails.adult.price += parseInt(tour.spot_id.price_adult);
        }
        if (tour.spot_id.price_child) {
          this.priceDetails.child.price += parseInt(tour.spot_id.price_child);
        }
        if (tour.spot_id.price_infant) {
          this.priceDetails.infant.price += parseInt(tour.spot_id.price_infant);
        }
      }
    });
    this.priceDetails.adult.totalPrice=this.priceDetails.adult.price;
    this.priceDetails.child.totalPrice=this.priceDetails.child.price;
    this.priceDetails.infant.totalPrice=this.priceDetails.infant.price;
  }

  // Function to increment the count
  increment(type: 'adult' | 'child' | 'infant') {
    this.priceDetails[type].count++;
    this.calculateTotalPrice(type);
  }

  // Function to decrement the count
  decrement(type: 'adult' | 'child' | 'infant') {
    if (this.priceDetails[type].count > 0) {
      this.priceDetails[type].count--;
      this.calculateTotalPrice(type);
    }
  }

  // Function to recalculate total price based on count
  calculateTotalPrice(type: 'adult' | 'child' | 'infant') {
    this.priceDetails[type].totalPrice = this.priceDetails[type].count * this.priceDetails[type].price;
  }

  onPayment() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.createBooking(true);
    }
    else {
      this.userForm.markAllAsTouched();
    }
  }
  onLaterPayment() {
    this.visible = true;
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.createBooking(false);
    }
    else {
      this.userForm.markAllAsTouched();
    }
  }
  createBooking(payNow:boolean){
    let payload={
      ...this.userForm.value,
      tours_details:this.allToursDetails,
      adult_price:this.priceDetails.adult.totalPrice,
      children_price:this.priceDetails.child.totalPrice,
      infant_price:this.priceDetails.infant.totalPrice,
      totalPrice:this.priceDetails.adult.totalPrice+this.priceDetails.child.totalPrice+this.priceDetails.infant.totalPrice,
      payNow:payNow,
      paymentStatus:false,
    };
    this.api.createBooking(payload).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.router.navigate(['tours/payment']);
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

  toggleRotation() {
    this.isRotated = !this.isRotated;
  }
  // Method to open the PrimeNG calendar when clicking on the custom icon
  openCalendar(calendar: any) {
    calendar.toggle();
  }
  selectTime(timePicker: any) {
    timePicker.toggle();
  }


}
