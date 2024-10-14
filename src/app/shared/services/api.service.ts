import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const toursDetails='tours_details'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

   // Create a BehaviorSubject initialized with the value from localStorage or a default value
   private dataSubject = new BehaviorSubject<any>(this.getDataFromLocalStorage());

   // Expose the BehaviorSubject as an observable
   toursData$ = this.dataSubject.asObservable();

 
   // Get data from localStorage
   private getDataFromLocalStorage(): any {
     const data = localStorage.getItem(toursDetails);
     return data ? JSON.parse(data) : null;
   }
 
   setData(newData: any): void {
     // Update localStorage
     localStorage.setItem(toursDetails, JSON.stringify(newData));
 
     this.dataSubject.next(newData);
   }
 
   // Clear data from localStorage and reset the BehaviorSubject
   clearData(): void {
     localStorage.removeItem(toursDetails);
     this.dataSubject.next(null); 
   }
 

  getTours() {
    return this.http.get(`${this.apiUrl}/tours`)
  }

  getSingleTourDetails(id: any) {
    return this.http.get(`${this.apiUrl}/tours/${id}`)
  }

  getSpots(id: any) {
    return this.http.get(`${this.apiUrl}/spots/${id}`);
  }
  getSpot(id:any){
    return this.http.get(`${this.apiUrl}/spots/spot/${id}`);
  }

  getActivities(id:any){
    return this.http.get(`${this.apiUrl}/activities/${id}`);
  }

  getBlogs(){
    return this.http.get(`${this.apiUrl}/blogs`);

  }
  getBlogById(id:any){
    return this.http.get(`${this.apiUrl}/blogs/${id}`);

  }

}
