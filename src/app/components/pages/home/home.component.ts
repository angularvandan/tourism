import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  responsiveOptions: any;

  bannerImage: any[] = [
    { img: '../../../../assets/home/home_banner.jpg' },
    { img: '../../../../assets/home/home_banner.jpg' },
    { img: '../../../../assets/home/home_banner.jpg' },
    { img: '../../../../assets/home/home_banner.jpg' }
  ];
  cards: any[] = [
    { img: '../../../../assets/home/container2/img1.png', title: 'Deep Diving', subTitle: 'The Philippines boasts numerous scuba diving spots that should not be missed...' },
    { img: '../../../../assets/home/container2/img2.png', title: 'Fire shows at beaches', subTitle: 'The Philippines boasts numerous scuba diving spots that should not be missed...' },
    { img: '../../../../assets/home/container2/img3.png', title: 'Jump off limestones', subTitle: 'Renting a kayak and paddling along the coast is one of the top things to do in Phi Phi Island tour. ..., ' },
    { img: '../../../../assets/home/container2/img4.png', title: 'Deep Diving', subTitle: 'The Philippines boasts numerous scuba diving spots that should not be missed...' },
    { img: '../../../../assets/home/container2/img1.png', title: 'Fire shows at beaches', subTitle: 'The Philippines boasts numerous scuba diving spots that should not be missed...' },
    { img: '../../../../assets/home/container2/img1.png', title: 'Jump off limestones', subTitle: 'Renting a kayak and paddling along the coast is one of the top things to do in Phi Phi Island tour. ..., ' }
  ];

  // tours_package: any[] = [
  //   {
  //     heading: 'Boracay',
  //     subHeading: 'Here are you must-know Boracay tips for every month!',
  //     details: [
  //       {
  //         title: 'Visiting Tips',
  //         detail: [
  //           {
  //             subTitle: 'Best from Nov-May', icon: '🌞'
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ];
  blogs: any[] = [
    {
      img: '../../../../assets/home/blogs/img1.png',
      title: 'Best Hiking places in the Boracay',
      subTitle: "Boracay is a small island in the central Philippines. It's known for its resorts and Boracay is a small island in the central Philippines. island in the central Philippines...."
    },
    {
      img: '../../../../assets/home/blogs/img2.png',
      title: 'Solo Travel: The Best Thing You Can Do for Yourself',
      subTitle: "Boracay is a small island in the central Philippines. It's known for its resorts and Boracay is a small island in the central Philippines. island in the central Philippines...."
    },
    {
      img: '../../../../assets/home/blogs/img3.png',
      title: 'Solo Travel: The Best Thing You Can Do for Yourself',
      subTitle: "Boracay is a small island in the central Philippines. It's known for its resorts and Boracay is a small island in the central Philippines. island in the central Philippines...."
    }
  ];

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1799px',
        numVisible: 5,
        numScroll: 1
      },
      {
        breakpoint: '1399px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
      }
      ,
      {
        breakpoint: '568px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.required],
      message: ['', Validators.required]
    });

  }
  toursDetails() {
    this.router.navigate(['/tours']);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }

}
