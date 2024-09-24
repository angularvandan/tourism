import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    CarouselModule,
    ButtonModule,
    ReactiveFormsModule,
    CheckboxModule
  ],
  exports:[
    SidebarModule,
    CarouselModule,
    ButtonModule,
    ReactiveFormsModule,
    CheckboxModule
  ]
})
export class SharedModule { }
