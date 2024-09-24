import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  standalone: true,  // Mark the component as standalone
  imports: [CommonModule] 
})
export class AboutusComponent implements OnInit{

  ourValues:any[]=[
    {
      img:'../../../../assets/about/container5/img1.png',
      title:'Integrity',
      subtitle:' "We operate with transparency and honesty in all our dealings."'
    },
    {
      img:'../../../../assets/about/container5/img2.png',
      title:'Innovation',
      subtitle:"We embrace creativity and strive to push the boundaries of what's possible."
    },
    {
      img:'../../../../assets/about/container5/img3.png',
      title:'Customer Focus',
      subtitle:'“Our clients are at the center of everything we do."'
    },
    {
      img:'../../../../assets/about/container5/img4.png',
      title:'Excellence',
      subtitle:'"We are committed to the highest standards of quality in every project."'
    },
  ];
  ngOnInit(): void {
      
  }
}
