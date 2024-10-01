import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    CarouselModule,
    ButtonModule,
    ReactiveFormsModule,
    CheckboxModule,
    CalendarModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    InputMaskModule,
  ],
  exports:[
    SidebarModule,
    CarouselModule,
    ButtonModule,
    ReactiveFormsModule,
    CheckboxModule,
    CalendarModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    InputMaskModule,
  ]
})
export class SharedModule { }
