import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  spots: any[] = [
    {
      img: '../../../../../assets/tours/spots/img1.png',
      title: 'White Beach',
      activity: [
        {
          img: '',
          title: '',
          subTitle: '',
          added: false
        }
      ],
      added: true
    },
    {
      img: '../../../../../assets/tours/spots/img2.png',
      title: 'Bulabog Beach',
      added: false
    }, {
      img: '../../../../../assets/tours/spots/img3.png',
      title: 'Puka Shell Beach',
      added: false
    }, {
      img: '../../../../../assets/tours/spots/img4.png',
      title: 'Rivera Beach',
      added: false
    }, {
      img: '../../../../../assets/tours/spots/img5.png',
      title: 'Station One',
      added: false
    }, {
      img: '../../../../../assets/tours/spots/img6.png',
      title: 'Mount Iuho',
      added: false
    }
  ]

  activity: any[] = [
    {
      img: '../../../../../assets/tours/activity/img1.png',
      title: 'Deep Dive',
      subTitle: 'White Beach',
      added: false
    },
    {
      img: '../../../../../assets/tours/activity/img2.png',
      title: 'Fire Shows',
      subTitle: 'White Beach',
      added: false
    },
    {
      img: '../../../../../assets/tours/activity/img3.png',
      title: 'Dolphin Watch',
      subTitle: 'Rivera Beach',
      added: false
    },
    {
      img: '../../../../../assets/tours/activity/img4.png',
      title: 'Sports Package',
      subTitle: 'Rivera Beach',
      added: false
    },
    {
      img: '../../../../../assets/tours/activity/img5.png',
      title: 'Dolphin Watch',
      subTitle: 'Mount Luho',
      added: false
    },
    {
      img: '../../../../../assets/tours/activity/img6.png',
      title: 'Paragliding',
      subTitle: 'Station One',
      added: false
    },
  ];

  tourId: any
  allSpots: any
  tourdetails: any

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((id: any) => {
      // console.log(id.id)
      this.tourId = id.id
    })

    this.getAllSpots()
    this.getTourDetails()
  }

  getAllSpots() {
    this.api.getSpots(this.tourId).subscribe((res: any) => {
      // console.log("spots", res)
      this.allSpots = res
    })
  }

  getTourDetails() {
    this.api.getSingleTourDetails(this.tourId).subscribe((res: any) => {
      // console.log("tour details", res)
      this.tourdetails = res
    })
  }

  addSpot(index: number, action: string) {
    if (action == 'add') {
      this.spots[index].added = true;
    }
    else {
      this.spots[index].added = false;

    }
  }
  addActivity(index: number, action: string) {
    if (action == 'add') {
      this.activity[index].added = true;
    }
    else {
      this.activity[index].added = false;

    }
  }
}
