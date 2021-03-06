import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get('http://localhost:3000/people');
  }
}
