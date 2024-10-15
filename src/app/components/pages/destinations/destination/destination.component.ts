import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute,private router:Router) { }


  tourId: any;
  spotId:any;
  allSpots: any;
  tourDetails: any;
  allActivities:any[]=[];

  allDetailsForCheckout:any[]=[];

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

      this.allSpots = this.allSpots.map((spot:any) => {
        return { ...spot, added: false };
      });
      this.allSpots[0].added=true;
      this.spotId=this.allSpots[0]._id;
      this.getAllActivities();

    }, (err: any) => {
      console.log(err);
    })
  }

  getAllActivities(){
    this.api.getActivities(this.spotId).subscribe({
      next:(res:any)=>{
        console.log(res);
        res=res.map((item:any)=>{
          return {...item,added:false}
        })
        if(res.length){
          this.allActivities.push([...res]);
        }
        console.log(this.allActivities);
      },error:(err)=>{
        console.log(err);
      }
    })
  }

  getTourDetails() {
    this.api.getSingleTourDetails(this.tourId).subscribe((res: any) => {
      console.log("tour details", res)
      this.tourDetails = res;
      this.allDetailsForCheckout.push(this.tourDetails);
    })
  }

  addSpot(index: number, action: string) {
    if (action == 'add') {
      this.allSpots[index].added = true;
      this.spotId=this.allSpots[index]._id;
      this.getAllActivities();
    }
    else {
      this.allSpots[index].added = false;
      this.allActivities.pop();
    }
  }
  addActivity(index1:number,index2: number, action: string) {
    if (action == 'add') {
      this.allActivities[index1][index2].added = true;
      this.allDetailsForCheckout.push(this.allActivities[index1][index2])
      console.log(this.allActivities);
    }
    else {
      this.allActivities[index1][index2].added = false;
      this.allDetailsForCheckout.pop();

    }
  }
  onCheckout(){
    this.api.setData(this.allDetailsForCheckout);
    this.router.navigate(['tours/checkout']);
  }
}
