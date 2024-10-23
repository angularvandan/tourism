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
  bannerDetails:any[]=[];

  blogs: any[] = [];
  allActivities:any[]=[];

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
      first_name: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-z]+$/)]],
      last_name: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-z]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
      message: ['', [Validators.required, Validators.minLength(2)]]
    });
    this.getHomeBanner();
    this.getAllTours();
    this.getBlogs();
    this.getActivities();

  }

  getHomeBanner(){
    this.api.getHomeBanners().subscribe({
      next:(res:any)=>{
        this.bannerDetails=res;
        this.bannerDetails = this.bannerDetails.map((banner, index) => ({
          ...banner,     // Spread the existing properties
          index: index + 1 // Add the index (1-based)
        }));
        console.log(this.bannerDetails);
      },error:(err:any)=>{
        console.log(err);
      }
    })
  }

  getBlogs() {
    this.api.getBlogs().subscribe({
      next: (res: any) => {
        console.log(res);
        this.blogs = res.slice(0, 3);
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
      this.api.createFeedback(this.contactForm.value).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.contactForm.reset();
        },error:(err:any)=>{
          console.log(err);
        }
      })
    }
    else{
      this.contactForm.markAllAsTouched();
    }
  }

  getAllTours() {
    this.api.getTours().subscribe((res: any) => {
      console.log("Tours", res)
      this.allTours = res.tours
    })
  }
  getActivities(){
    this.api.getAllActivities().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allActivities=res;
      },
      error:(err:any)=>{
        console.log(err);
      }
    });
  }

}
