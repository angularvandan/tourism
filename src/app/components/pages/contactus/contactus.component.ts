import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  standalone: true,  // Mark the component as standalone
  imports: [CommonModule,SharedModule,ToastModule],
  providers:[MessageService]
})
export class ContactusComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder,private api:ApiService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      first_name: ['', [Validators.required, this.noNumbersValidator()]],
      last_name: ['', [Validators.required, this.noNumbersValidator()]],
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
      this.api.createContactForm(this.contactForm.value).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message sent successfully' });
          this.contactForm.reset();
        },error:(err:any)=>{
          console.log(err)
        }
      })
    }
    else{
      this.contactForm.markAllAsTouched();
    }
  }

}
