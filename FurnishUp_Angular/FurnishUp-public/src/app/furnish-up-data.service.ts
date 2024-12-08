import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class FurnishUpDataService {
  private apiBaseUrl = 'http://localhost:3000/api/product'; 
  constructor(private http: HttpClient) { }
  
}

