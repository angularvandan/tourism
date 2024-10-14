import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  visible: boolean=false;

  constructor(private fb: FormBuilder,private api :ApiService) {
    this.minDate = new Date();
  }


  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      phone_no: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      checked: ['', Validators.required]
    });
    // Subscribe to the data observable
    this.api.toursData$.subscribe((data:any) => {
      console.log(data);
    });
  }

  // Method to allow only letters (alphabets) in input fields using RegEx
  allowLettersOnly(event: KeyboardEvent): boolean {
    const inputChar = String.fromCharCode(event.charCode); // Get the character from the charCode

    // Regular expression to allow only alphabets and space
    const regex = /^[a-zA-Z\s]*$/;

    // Test the character input against the regex pattern
    if (regex.test(inputChar)) {
      return true; // Allow the input if it matches the pattern
    } else {
      event.preventDefault(); // Prevent the input if it doesn't match the pattern
      return false;
    }
  }


  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
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
