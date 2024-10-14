import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.scss']
})
export class DestinationDetailsComponent implements OnInit{

  constructor(private api: ApiService, private activatedRoute:ActivatedRoute){

  }
  tourId:any;
  allSpots:any;
  tourDetails:any;
  spot:any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((id: any) => {
    // console.log(id.id)
    this.tourId = id.id;
    this.getAllSpots();
    this.getTourDetails();
    });
  }

  getAllSpots() {
    this.api.getSpots(this.tourId).subscribe((res: any) => {
      console.log("spots", res)
      this.allSpots = res;
      this.allSpots=this.allSpots.map((spot:any)=>{
        return {...spot,show:false}
      });
      this.allSpots[0].show=true;
      this.spot=this.allSpots[0];

    }, (err: any) => {
      console.log(err);
    })
  }
  showSpot(index:any){
    this.allSpots=this.allSpots.map((spot:any)=>{
      return {...spot,show:false}
    });
    this.allSpots[index].show=true;
    this.spot=this.allSpots[index];
  }
  getTourDetails() {
    this.api.getSingleTourDetails(this.tourId).subscribe((res: any) => {
      console.log("tour details", res)
      this.tourDetails = res;
      
    })
  }
}
