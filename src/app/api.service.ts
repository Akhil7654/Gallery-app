import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(rprivate http:HttpClient) { }

  viewgallery=()=>{
    return this.http.get("")
  }
}
