import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  standalone: true,  // Mark the component as standalone
  imports: [CommonModule,SharedModule]
})
export class ContactusComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, this.noNumbersValidator()]],
      lastName: ['', [Validators.required, this.noNumbersValidator()]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      checked:['',Validators.required]
    });
  }
  // Custom validator to ensure no numbers in the input field
  noNumbersValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const hasNumber = /\d/.test(control.value); // Check if the string contains any digits (numbers)
      return hasNumber ? { noNumbers: true } : null; // If it has numbers, return an error, otherwise null
    };
  }
  
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }

}
