import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTours() {
    return this.http.get(`${this.apiUrl}/tours`)
  }

  getSingleTourDetails(id: any) {
    return this.http.get(`${this.apiUrl}/tours/${id}`)
  }

  getSpots(id: any) {
    return this.http.get(`${this.apiUrl}/spots/${id}`)
  }
}
