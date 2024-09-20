import { Component, OnInit } from '@angular/core';

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
    { img: '../../../../assets/home/container2/img1.png', title: 'Deep Diving', subTitle: 'The Philippines boasts numerous scuba diving spots that should not be missed...' },
    { img: '../../../../assets/home/container2/img2.png', title: 'Fire shows at beaches', subTitle: 'The Philippines boasts numerous scuba diving spots that should not be missed...' },
    { img: '../../../../assets/home/container2/img3.png', title: 'Jump off limestones', subTitle: 'Renting a kayak and paddling along the coast is one of the top things to do in Phi Phi Island tour. ..., ' }
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


  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
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
  }

}
