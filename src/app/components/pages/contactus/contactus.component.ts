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
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      checked:['',Validators.required]
    });

  }
  restrictNonAlphabeticInput(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.keyCode);
    if (!/^[a-zA-Z]+$/.test(inputChar)) {
      event.preventDefault(); // Prevent input if it’s not alphabetic
    }
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
