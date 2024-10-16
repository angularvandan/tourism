import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  responsiveOptions: any;
  allTours: any[] = []

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
  blogs: any[] = [];

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '2599px',
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

    this.getAllTours();
    this.getBlogs();


  }


  getBlogs() {
    this.api.getBlogs().subscribe({
      next: (res: any) => {
        console.log(res);
        this.blogs = [...res];
      }, error: (err: any) => {
        console.log(err);
      }
    })
  }
  toursDetails(id: any) {
    this.router.navigate([`/tours/tour/${id}`]);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }

  getAllTours() {
    this.api.getTours().subscribe((res: any) => {
      console.log("Tours", res)
      this.allTours = res.tours
    })
  }

}
