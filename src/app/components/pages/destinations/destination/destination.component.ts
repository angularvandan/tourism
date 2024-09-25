import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  spots:any[]=[
    {
      img:'../../../../../assets/tours/spots/img1.png',
      title:'White Beach',
      activity:[
        {
          img:'',
          title:'',
          subTitle:'',
          added:false
        }
      ],
      added:true
    },
    {
      img:'../../../../../assets/tours/spots/img2.png',
      title:'Bulabog Beach',
      added:false
    },{
      img:'../../../../../assets/tours/spots/img3.png',
      title:'Puka Shell Beach',
      added:false
    },{
      img:'../../../../../assets/tours/spots/img4.png',
      title:'Rivera Beach',
      added:false
    },{
      img:'../../../../../assets/tours/spots/img5.png',
      title:'Station One',
      added:false
    },{
      img:'../../../../../assets/tours/spots/img6.png',
      title:'Mount Iuho',
      added:false
    }
  ]

  activity:any[]=[
    {
      img:'../../../../../assets/tours/activity/img1.png',
      title:'Deep Dive',
      subTitle:'White Beach',
      added:false
    },
    {
      img:'../../../../../assets/tours/activity/img2.png',
      title:'Fire Shows',
      subTitle:'White Beach',
      added:false
    },
    {
      img:'../../../../../assets/tours/activity/img3.png',
      title:'Dolphin Watch',
      subTitle:'Rivera Beach',
      added:false
    },
    {
      img:'../../../../../assets/tours/activity/img4.png',
      title:'Sports Package',
      subTitle:'Rivera Beach',
      added:false
    },
    {
      img:'../../../../../assets/tours/activity/img5.png',
      title:'Dolphin Watch',
      subTitle:'Mount Luho',
      added:false
    },
    {
      img:'../../../../../assets/tours/activity/img6.png',
      title:'Paragliding',
      subTitle:'Station One',
      added:false
    },
  ];

  ngOnInit(): void {
      
  }

  addSpot(index:number,action:string){
    if(action=='add'){
      this.spots[index].added=true;
    }
    else{
      this.spots[index].added=false;

    }
  }
  addActivity(index:number,action:string){
    if(action=='add'){
      this.activity[index].added=true;
    }
    else{
      this.activity[index].added=false;

    }
  }
}
